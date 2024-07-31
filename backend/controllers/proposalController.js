// Import the schema needed
require("dotenv").config();
const Proposal = require("../models/proposal");

exports.displayAllProposal = async (req, res) => {
    // const yourJWTtoken = localStorage.getItem("token");

    try {
        const allProposals = await Proposal.find();
        console.log("AllProposals", allProposals);
            res.status(200).json(allProposals)
            } catch (err) {
            console.log("Could not get proposal");
            res.status(500).json("Error: Could not get proposal");
        }
};

exports.displayProposal = async (req, res) => {

    try {
        console.log(req.params)
        // const proposalId = req.params._id
        const allProposals = await Proposal.findOne({_id: req.params._id});

        console.log(`${allProposals}`);
        res.status(200).json(allProposals);
            } catch (err) {
            console.log(err);
            console.log("Could not get proposal");
            res.status(500).json("Error: Could not get proposal");
        }
    }

exports.createProposal = async (req, res) => {
    const companyName = req.body.companyName
    const website = req.body.website
    const projectStarted = req.body.projectStarted
    const proposition = req.body.proposition
    const techRequirements = req.body.techRequirements
    const availabilityStart = req.body.availabilityStart
    const availabilityEnd = req.body.availabilityEnd
    const contact = req.body.contact
    const owner = req.body.owner
    const category = req.body.category
    const categorySoftwareDevelopment = req.body.category
    const categoryDataAnalysis = req.body.categoryDataAnalysis
    const categoryDigitalMarketing = req.body.categoryDigitalMarketing
    const categoryUxUi = req.body.categoryUxUi

    try {

            const newProposal = new Proposal({companyName: companyName, website: website, projectStarted: projectStarted, proposition: proposition, techRequirements: techRequirements,
                availabilityStart: availabilityStart, availabilityEnd: availabilityEnd, contact: contact, owner: owner, category: category, categorySoftwareDevelopment: categorySoftwareDevelopment, 
            categoryDataAnalysis: categoryDataAnalysis, categoryDigitalMarketing: categoryDigitalMarketing, categoryUxUi: categoryUxUi});

                console.log(`Proposal Submitted: ${newProposal}`);
                const test = await newProposal.save();
                console.log("New Proposal", test);

                res.status(201).json("Proposal Submitted!")
        } catch (err)  {
            console.log("err", err);
            console.log("Something went wrong. Proposal could not be created");
            res.status(500).json("Error: Something went wrong. Proposal could not be created");
        }
    }


exports.updateProposal = async (req, res) => {
 
    try {

            const replacingProposal = {
                companyName: req.body.companyName,
                website: req.body.website,
                projectStarted: req.body.projectStarted,
                proposition: req.body.proposition,
                techRequirements: req.body.techRequirements,
                availabilityStart: req.body.availabilityStart,
                availabilityEnd: req.body.availabilityEnd,
                contact: req.body.contact,
                owner: req.body.owner,
                category: req.body.category,
                categorySoftwareDevelopment: req.body.category,
                categoryDataAnalysis: req.body.categoryDataAnalysis,
                categoryDigitalMarketing: req.body.categoryDigitalMarketing,
                categoryUxUi: req.body.categoryUxUi,
                read: req.body.read,
                approvedStatus: req.body.approvedStatus,
                underReviewStatus: req.body.underReviewStatus,
                submittedStatus: req.body.submittedStatus,
                deniedStatus: req.body.deniedStatus,
                ongoingStatus: req.body.ongoingStatus
            }

            await Proposal.findOneAndUpdate({_id: req.params._id}, replacingProposal);

            const isAdmin = req.user.isAdmin;
            const userId = req.user._id;

            res.status(201).json(replacingProposal);
        } catch (err) {
            console.log("Something went wrong. Could not update proposal");
            res.status(500).json("Error: Something went wrong. Could not update proposal");
        }
    };

exports.deleteProposal = async (req, res) => {
    try {
        await Proposal.findByIdAndDelete(req.params._id);
        res.status(200).json(`Proposal removed`)

    } catch (err) {
        if (!foundProposal) {
            console.log(`Incorrect id. You cannot delete this proposal`);
            res.status(503).json(`Incorrect id cannot delete message`);
        } else {
            console.log(`Error Occured. Please try again`);
            res.status(500).json(`Error Occured. Please try again`);
        }
    }
}

exports.displayUserProposal = async (req, res) => {
    try {
        const test = await Proposal.find({owner: req.params.owner});
        
        res.status(200).json(test)
    } catch (err) {
        console.log(req.params.owner)
        res.status(500).json("Proposal Not Found")
    }
}