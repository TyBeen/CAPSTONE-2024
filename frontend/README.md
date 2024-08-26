# Capstone Portal
***

## Purpose of Project
**Market, collect, and host sponsor proposals for Upright bootcamp capstone projects.**

## Technology and Software Used
- Node
- Express
- MongoDB
- React
- Tailwind Flowbite (React)
- JWT Decode
- Nodemailer
- GitPages
- Netlify
- Render

## Instructions for download and update
1. Clone repo [CAPSTONE](https://github.com/TyBeen/CAPSTONE-2024.git) into local folder
2. Create branch off develop01 `git checkout -b [newbranchname]`
3. Split terminal, use `npm run dev` for backend (mongo) and frontend (vite)
4. Push changes to capstone directory
5. Use: 
```
git add .
git commit -m "firstpush"
git push --set-upstream origin [thisbranchname]
```

## Instructions for deployment
### FRONTEND
Uses Gitpages (module) and Netlify ([host](https://uprightcapstone.netlify.app/))
1. Push and merge all updates to _develop01_ branch in github
2. Open _develop01_ branch locally in vscode and `git pull`
3. Once local branch is up to date, test develop01 from `localhost:3000` for full functionality
4. If the update runs perfectly from develop01 localhost, push and merge _develop01_ to prod in github
5. Open _prod_ locally in vscode and `git pull`
6. Once local branch is up to date, `npm run deploy` from _prod_ frontend directory
>The live client site is updated!

### BACKEND
Uses Render ([host](https://capstone-2024-ppe0.onrender.com/))
1. Push and merge all updates to _develop01_ branch in github
2. Branch _gh-pages_ will automatically update and redeploy in Render
>The live server is updated!

## Server Endpoints
### `/users`
#### GET `/getAll`
#### GET `/:_id`  takes `user._id`
#### GET `/check/:username` takes `user.username`
#### POST `/login` takes `user.username`, password
#### POST `/register` takes username, email, password, firstName, lastName, company (t/f), companyName, city, state
#### POST `/forgotPassword` takes `user.email`
#### POST `/resetPassword` takes token, new password
#### PUT `/:_id` checks `user._id`, `user.isAdmin`; takes `user.username`, `user.email`, `user.firstName`, `user.lastName`, `user.company` (t/f), `user.companyName`, `user.city`, `user.state`, `user.isAdmin` (t/f)
#### DELETE `/:_id` checks `user._id`, `user.isAdmin`; takes `user._id`

### `/proposals`
#### GET `/displayAllProposal`
#### GET `/displayProposal/:_id` takes `proposal._id`
#### GET `/displayUserProposal/:owner` takes `proposal.owner` (id number)
#### POST `/createProposal` takes companyName, website, projectStarted (t/f), proposition, techRequirements, availabilityStart, availabilityEnd, contact, category (softwareDevelopment, dataAnalytics, digitalMarketing, uxUi, noCategory), read (t/f), updated (t/f), status (submitted/ approved/ denied), owner (current user._id)
#### POST `/send` takes same as createProposal, runs with proposal submission
#### PUT `/updateProposal/:_id` checks `user._id`, `user.isAdmin`; takes `proposal.companyName`, `proposal.website`, `proposal.projectStarted` (t/f), `proposal.proposition`, `proposal.techRequirements`, `proposal.availabilityStart`, `proposal.availabilityEnd`, `proposal.contact`, `proposal.category` (softwareDevelopment, dataAnalytics, digitalMarketing, uxUi, noCategory), `proposal.read` (t/f), `proposal.updated` (t/f), `proposal.status` (submitted/ approved/ denied)
#### DELETE `/deleteProposal/:_id` checks `user._id`, `user.isAdmin`; takes `proposal._id`

### Middleware
#### authentication takes `authorization: [token]`

## Client Endpoints
### `/` Landing
Landing is the homepage, holds Nav, Header, Testimonies, and Carousal components
### `/login` Login
Login page redirects to Dashboard or Control Panel (role-based access)
### `/register` Register
Register page holds NewUserForm component, redirects to Login on submit
### `/forgotPassword` ForgotPassword
Forgot Password sends email with token to reset password
### `/resetPassword` ResetPassword
Reset Password redirects to Login on submit
### `/about` About
About page contains developer bios
### `/secret` Secret
Secret page is shhhhhh...
### `/library` Library
Library displays contents from Google Drive folder of capstone presentation recordings
### `/dashboard` Dashboard
Dashboard holds loginHeader and Categories components
### `/controlpanel` ControlPanel
Control Panel holds AllProposalModal, AllUsersDrawer, AssignAdminModal, DeleteProposalModal, MarkAsReadButton, and ViewProposalFormModal components
### `/proposal` Proposal
Proposal page holds NewProposalForm, proposalStatus, and EditProposalForm components

## Developers
### Ty Burlington (host)
### Amanda Brennan ([host](https://github.com/artxofxwords))
### Morrigan Rosingrave (host)