/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Modal} from "flowbite-react";

//!Modal seems to be out of scope for import, consider relocating Modals folder

//enter this code onto any component that contains a function that could throw a 440 error (expired login)
//at top of page:
//import { useNavigate } from "react-router-dom";
//import Error440 from ...modals/Error440

//at top of function:
//const navigate = useNavigate();
//const [error440, setError440] = useState(false);

//after fetch response:
// if (response.status === 440) {
//     setError440(true);

//     setTimeout(() => {navigate("/login"), setError440(false)}, 3000);
//   }

//at end of return statement:
//<Error440 error440={error440} setError440={setError440} />

export default function Error440 ({error440, setError440}) {

    function closeError440Modal () {
        setError440(false);
    }

    return (
        <Modal show={error440} onClose={closeError440Modal}>
            <Modal.Header>ERROR</Modal.Header>
            <Modal.Body><h1 className="text-color-red">
                I&apos;m sorry, there was an error. 
                Your session has expired.
                You will be redirected to the Login page.</h1>
            </Modal.Body>
        </Modal>
    )
}