/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import EditProposalForm from "../../modals/EditProposalForm";

export default function ProposalStatus() {
  const [state, setState] = useState(null);
  const [thisProposal, setThisProposal] = useState();
  const [updateProposal, setUpdateProposal] = useState(false);

  const owner = localStorage.getItem("userInfo");

  useEffect(() => {
    if (!state) {
      getUserProposal();
    }
  }, []);

  async function getUserProposal() {
    const response = await fetch(
      `http://localhost:3000/proposals/displayUserProposal/${owner}`
    );

    const data = await response.json();
    console.log("data", data);
    setState(data);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "5px",
        textAlign: "left",
        marginTop: "4vh",
      }}
    >
      <ul>
        {state?.map((proposal) => {
          return (
            <li
              key={proposal._id}
              style={{ display: "flex", marginBottom: "8px" }}
            >
              <p style={{ marginRight: "auto" }}>
                <b>{proposal.companyName}</b> : &quot;{proposal.status}&quot;{" "}
              </p>

              <div style={{ marginLeft: "auto" }}>
                <Button
                  size="xs"
                  type="click"
                  onClick={() => {
                    setThisProposal(proposal), setUpdateProposal(true);
                  }}
                  className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                      d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                    />
                  </svg>
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      {updateProposal && (
        <EditProposalForm
          thisProposal={thisProposal}
          updateProposal={updateProposal}
          setUpdateProposal={setUpdateProposal}
        />
      )}
      <div></div>
    </div>
  );
}
