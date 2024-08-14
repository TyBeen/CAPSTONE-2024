/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Button, Label, Radio } from "flowbite-react";
import Nav from "../header/Nav";
import ViewProposalFormModal from "./ControlPanel/ViewProposalFormModal";
import AllUsersDrawer from "../main/ControlPanel/AllUsersDrawer";
import AllProposalsModal from "./ControlPanel/AllProposalsModal";
import AssignAdminModal from "./ControlPanel/AssignAdminModal";
import PropByCatAccordion from "./ControlPanel/PropByCatAccordion";
import MarkAsReadButton from "./ControlPanel/MarkAsReadButton";
import DeleteProposalModal from "./ControlPanel/DeleteProposalModal";
import Error500 from "../../modals/Error500";
import Error440 from "../../modals/Error440";

export default function ControlPanel() {
  const yourJwtToken = localStorage.getItem("jwtToken");
  const decoded = jwtDecode(yourJwtToken); //https://www.npmjs.com/package/jwt-decode
  const navigate = useNavigate();

  //useState variables
  const [userInfo, setUserInfo] = useState([]); //userInfo that persists
  const [userInfoLoaded, setUserInfoLoaded] = useState(false); //stops page from loading till userInfo fetched

  const [allProposals, setAllProposals] = useState([]); //list of all proposals from database
  const [unreadProposals, setUnreadProposals] = useState([]); //list of all unread proposals based on "read = true or false"
  const [priorityProposals, setPriorityProposals] = useState([]); //list of top five proposals sorted by sponser availability date
  const [updatedProposals, setUpdatedProposals] = useState([]); //list of user updated proposals

  const [currentProposal, setCurrentProposal] = useState(); //clicked proposal, fetches by id to display details
  const [currentProposalOwnerInfo, setCurrentProposalOwnerInfo] = useState([]); //sponsor info for selected proposal

  const [category, setCategory] = useState("noCategory");
  const [status, setStatus] = useState(); //proposal status submitted/ approved/ denied
  const [deleteProposal, setDeleteProposal] = useState(false); //shows delete proposal popup to confirm delete

  const [error500, setError500] = useState(false); //modal error 500 message 
  const [error500Message, setError500Message] = useState(); //data from error (response.json)
  const [error440, setError440] = useState(false); //modal error 440 message

  //useEffect functions
  useEffect(() => {
    setPersistingCurrentUserObject(); //user info persists with refresh
  }, []);

  useEffect(() => {
    getAllProposals(); //stays on top of changing proposals list
  }, []);

  useEffect(() => {
    allUnreadProposals(); //rerenders unread list
    sortProposalsByPriority(); //rerenders priority list
    allUpdatedProposals(); //rerenders updated proposals list
  }, [allProposals]);

  useEffect(() => {
    if (currentProposal) {
      getOwnerInfo(); //renders sponsor info who submitted selected proposal
    }
  }, [currentProposal]);

  //functions
  async function setPersistingCurrentUserObject() {
    const response = await fetch(`http://localhost:3000/users/${decoded._id}`);

    const data = await response.json();
    console.log("Persistent user data:", data);

    setUserInfo(data);
    setUserInfoLoaded(true);
  }

  //fetches all proposals
  async function getAllProposals() {
    const response = await fetch(
      `http://localhost:3000/proposals/displayAllProposal`
    );

    const data = await response.json();
    setAllProposals(data);
  }

  //grabs unread proposals from allProposals list and displays them on "unread" card
  async function allUnreadProposals() {
    const unreadProposalsList = [];

    try {
      for (const item of allProposals) {
        if (item.read === false) {
          unreadProposalsList.push(item);
        }
      }
      setUnreadProposals(unreadProposalsList);
    } catch (err) {
      console.log(err);
    }
  }

  const activeProposals = [];
  //fetch list of proposals sorted by available date
  async function sortProposalsByPriority() {
    for (const proposal of allProposals) {
      if (proposal.status === "submitted" || proposal.status === "approved") {
        activeProposals.push(proposal);
      }
    }
    console.log("active proposals:", activeProposals);
    const sortedProposals = activeProposals.sort(
      (a, b) => new Date(a.availabilityStart) - new Date(b.availabilityStart)
    );

    sortedProposals.splice(5);

    setPriorityProposals(sortedProposals);
  }

  //display proposals that have been updated by user/owner
  async function allUpdatedProposals() {
    const updatedProposalsFound = [];

    for (const proposal of allProposals) {
      if (proposal.updated) {
        updatedProposalsFound.push(proposal);
      }
    }

    setUpdatedProposals(updatedProposalsFound);
  }

  //onClick of any project in various lists, proposal appears in 'Project Detail View' with project details
  async function handleProposalClick(e, proposal) {
    e.preventDefault();

    setDeleteProposal(false);
    setCurrentProposal(proposal);
  }

  async function handleProposalClose(e) {
    e.preventDefault();

    setCurrentProposal(null);
  }

  //once currentProposal is set, specific proposal things...
  let projectInProgress;

  if (currentProposal) {
    if (currentProposal.projectStarted) {
      projectInProgress = <span>Project is already underway.</span>;
    } else {
      projectInProgress = <span>Project is not started.</span>;
    }
  }

  //pulls info of sponser who submitted proposal through owner id
  async function getOwnerInfo() {
    const _id = currentProposal.owner;
    console.log("owner id: ", currentProposal.owner);

    const response = await fetch(`http://localhost:3000/users/${_id}`);

    const data = await response.json();
    console.log("owner info: ", data);

    setCurrentProposalOwnerInfo(data);
  }

  function handleCategory(e) {
    e.preventDefault();

    setCategory(e.target.value);
  }

  //functions for state variables to hold admin selections until "save changes" is clicked for put request
  function handleStatus(e) {
    e.preventDefault();

    setStatus(e.target.value);
  }

  //handles admin saving all state variables to database
  async function handleSaveAllProposalChanges(e) {
    e.preventDefault();

    const body = {
      _id: userInfo._id,
      isAdmin: userInfo.isAdmin,
      category: category,
      status: status,
    };

    const response = await fetch(
      `http://localhost:3000/proposals/updateProposal/${currentProposal._id}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json",
          Authorization: yourJwtToken,
        },
      }
    );

    const data = await response.json();
    
    if (response.status === 440) {
      setError440(true);
      
      setTimeout(() => {navigate("/login"), setError440(false)}, 3000);
    }
    
    if (response.status === 500) {
      setError500(true);
      setError500Message(data);
    }

    

    getAllProposals();
    setCurrentProposal(null);
  }

  return (
    <div>
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {userInfoLoaded && (
          <div>
            <h1
              style={{
                fontSize: "2.5em",
                marginTop: "5vh",
                marginBottom: "5vh",
              }}
            >
              <span style={{ color: "#ff532f" }}>Upright Capstone</span> | Admin
              Control Panel
            </h1>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "10px",
            alignContent: "center",
          }}
        >
          <ViewProposalFormModal />

          <AllUsersDrawer userInfo={userInfo} />

          <AllProposalsModal handleProposalClick={handleProposalClick} />

          <AssignAdminModal />
        </div>
        <div style={{ display: "inline-flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              rowGap: "1vh",
              columnGap: "1vw",
              flexWrap: "wrap",
              justifyContent: "center",
              textAlign: "center",
              width: "95vw",
              // height: "40vw",
              marginTop: "2vh",
              marginLeft: "4vw",
            }}
          >
            <div
              style={{
                display: "inline-flex",
              }}
            >
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Unread Proposals
                </h5>

                <ul className="w-98 text-med font-bold text-gray-900 bg-white border border-gray-200 rounded-lg">
                  {unreadProposals?.map((proposal) => (
                    <li
                      key={proposal._id}
                      onClick={(e) => {
                        handleProposalClick(e, proposal);
                      }}
                      style={{ display: "flex" }}
                      className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg"
                    >
                      <span
                        style={{ marginRight: "auto" }}
                        className="inline-flex w-3 h-3 me-3 bg-yellow-300 rounded-full"
                      ></span>
                      <a style={{ marginLeft: "auto" }} href="#">
                        {proposal.companyName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
              }}
            >
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Priority Proposals
                </h5>

                <ul className="w-98 text-med font-bold text-gray-900 bg-white border border-gray-200 rounded-lg">
                  {priorityProposals?.map((proposal) => (
                    <li
                      key={proposal._id}
                      onClick={(e) => {
                        handleProposalClick(e, proposal);
                      }}
                      style={{ display: "flex" }}
                      className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg"
                    >
                      <a href="#" style={{ marginRight: "auto" }}>
                        {proposal.companyName}
                      </a>
                      <span style={{ marginLeft: "auto" }}>
                        {proposal.availabilityStart}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
              }}
            >
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Recently Updated
                </h5>

                <ul className="w-98 text-med font-bold text-gray-900 bg-white border border-gray-200 rounded-lg">
                  {updatedProposals?.map((proposal) => (
                    <li
                      key={proposal._id}
                      onClick={(e) => {
                        handleProposalClick(e, proposal);
                      }}
                      style={{ display: "flex" }}
                      className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg"
                    >
                      <a style={{ marginLeft: "auto" }} href="#">
                        {proposal.companyName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                width: "30vw",
              }}
            >
              <PropByCatAccordion handleProposalClick={handleProposalClick} />
            </div>
          </div>
        </div>

        {currentProposal && (
          <div
            style={{
              display: "inline-flex",
              width: "85vw",
              margin: "25px",
            }}
          >
            <a href="#">
              <svg
                onClick={(e) => {
                  handleProposalClose(e);
                }}
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </a>

            <div
              style={{
                backgroundColor: "#1a9988",
              }}
              className="block p-6 bg-white border rounded-lg shadow"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                }}
              >
                <h1
                  id="current"
                  style={{ marginRight: "2vw", color: "ff532f" }}
                  className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
                >
                  {currentProposal.companyName}
                </h1>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "baseline",
                  }}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {currentProposal.availabilityStart} -{" "}
                    {currentProposal.availabilityEnd}
                  </h5>

                  <MarkAsReadButton
                    currentProposal={currentProposal}
                    getAllProposals={getAllProposals}
                  />

                  <DeleteProposalModal
                    userInfo={userInfo}
                    currentProposal={currentProposal}
                    setCurrentProposal={setCurrentProposal}
                    deleteProposal={deleteProposal}
                    setDeleteProposal={setDeleteProposal}
                    getAllProposals={getAllProposals}
                  />
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  columnGap: "20px",
                  float: "right",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "10px",
                    margin: "10px",
                  }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <fieldset className="inline-flex max-w-md flex-col gap-4">
                    <legend className="mb-4">Set Proposal Category</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="noCategory"
                        name="category"
                        value="noCategory"
                        defaultChecked={
                          currentProposal.category === "noCategory"
                            ? true
                            : false
                        }
                      />
                      <Label htmlFor="noCategory">No Category</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="softwareDevelopment"
                        name="category"
                        value="softwareDevelopment"
                        onChange={(e) => {
                          handleCategory(e);
                        }}
                        defaultChecked={
                          currentProposal.category === "softwareDevelopment"
                            ? true
                            : false
                        }
                      />
                      <Label htmlFor="softwareDevelopment">
                        Software Development
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="dataAnalytics"
                        name="category"
                        value="dataAnalytics"
                        onChange={(e) => {
                          handleCategory(e);
                        }}
                        defaultChecked={
                          currentProposal.category === "dataAnalytics"
                            ? true
                            : false
                        }
                      />
                      <Label htmlFor="dataAnalytics">Data Analytics</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="digitalMarketing"
                        name="category"
                        value="digitalMarketing"
                        onChange={(e) => {
                          handleCategory(e);
                        }}
                        defaultChecked={
                          currentProposal.category === "digitalMarketing"
                            ? true
                            : false
                        }
                      />
                      <Label htmlFor="digitalMarketing">
                        Digital Marketing
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="uxUi"
                        name="category"
                        value="uxUi"
                        onChange={(e) => {
                          handleCategory(e);
                        }}
                        defaultChecked={
                          currentProposal.category === "uxUi" ? true : false
                        }
                      />
                      <Label htmlFor="uxUi">UX/UI</Label>
                    </div>
                  </fieldset>

                  <fieldset className="inline-flex max-w-md flex-col gap-4">
                    <legend className="mb-4">Set Proposal Status</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="submitted"
                        name="status"
                        value="submitted"
                        onChange={(e) => {
                          handleStatus(e);
                        }}
                        defaultChecked={
                          currentProposal.status === "submitted" ? true : false
                        }
                      />
                      <Label htmlFor="submitted">Submitted</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <Radio
                        id="approved"
                        name="status"
                        value="approved"
                        onChange={(e) => {
                          handleStatus(e);
                        }}
                        defaultChecked={
                          currentProposal.status === "approved" ? true : false
                        }
                      />
                      <Label htmlFor="approved">Approved</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="denied"
                        name="status"
                        value="denied"
                        onChange={(e) => {
                          handleStatus(e);
                        }}
                        defaultChecked={
                          currentProposal.status === "denied" ? true : false
                        }
                      />
                      <Label htmlFor="denied">Denied</Label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div
                style={{
                  height: "auto",
                  padding: "40px",
                  backgroundColor: "white",
                }}
              >
                <p className="mb-3 text-xl text-gray-500 md:text-xl">
                  Submitted by: {currentProposalOwnerInfo.firstName}{" "}
                  {currentProposalOwnerInfo.lastName}
                </p>
                <p className="mb-3 text-xl text-gray-500 md:text-xl">
                  Website:{" "}
                  <a
                    href={currentProposal.website}
                    className="font-xl text-blue-600 hover:underline"
                  >
                    {currentProposal.website}
                  </a>
                </p>
                <p className="mb-3 text-xl text-gray-500 md:text-xl">
                  Preferred contact: {currentProposal.contact}
                </p>
                <p className="mb-3 text-xl text-gray-500 md:text-xl">
                  Location: {currentProposalOwnerInfo.city},{" "}
                  {currentProposalOwnerInfo.state}
                </p>
                <br />
                <p className="text-gray-500 md:text-xl">
                  {currentProposal.proposition}
                </p>
                <br />
                <p className="text-gray-500 md:text-xl">
                  Tech: {currentProposal.techRequirements}
                </p>
                <br />
                <p className="text-gray-500 md:text-xl">{projectInProgress}</p>
                <br />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    margin: "20px",
                  }}
                >
                  <Button
                    type="click"
                    onClick={(e) => {
                      handleSaveAllProposalChanges(e);
                    }}
                    style={{
                      display: "inline-flex",
                      backgroundColor: "#ff532f",
                      color: "black",
                    }}
                    className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                  >
                    Save All Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Error500 error500={error500} setError500={setError500} error500Message={error500Message} setError500Message={setError500Message} />
      <Error440 error440={error440} setError440={setError440} />
    </div>
  );
}
