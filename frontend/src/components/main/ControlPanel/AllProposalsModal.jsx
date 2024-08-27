/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button } from "flowbite-react";

export default function AllProposalsModal({
  allProposals,
  handleProposalClick,
}) {
  const [viewProposals, setViewProposals] = useState(false);

  return (
    <>
      <Button
        size="xs"
        style={{
          display: "inline-flex",
          backgroundColor: "#1b3b50",
          color: "#ddd5d0",
          borderRadius: "8px",
          padding: "3px",
          marginTop: "3px",
        }}
        type="click"
        onClick={() => {
          setViewProposals(true);
        }}
        className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
      >
        See All Proposals
      </Button>
      <Modal show={viewProposals} onClose={() => setViewProposals(false)}>
        <Modal.Header>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            All Proposals
          </h5>
        </Modal.Header>
        <Modal.Body>
          <ul className="w-98 text-med font-bold text-gray-900 bg-white border border-gray-200 rounded-lg">
            {allProposals?.map((proposal) => (
              <li
                key={proposal._id}
                onClick={(e) => {
                  setViewProposals(false), handleProposalClick(e, proposal);
                }}
                className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg"
              >
                <a href="#">{proposal.companyName}</a>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
