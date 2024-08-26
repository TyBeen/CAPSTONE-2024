import SecretOne from "../../AssetsSecret/SecretOne.jpg";
import SecretTwo from "../../AssetsSecret/SecretTwo.jpg";
import SecretThree from "../../AssetsSecret/SecretThree.jpg";
import SecretFour from "../../AssetsSecret/SecretFour.jpg";
import SecretFive from "../../AssetsSecret/SecretFive.jpg";

export default function Secret () {


    return (
        <>
            <div style={{
                alignContent: "center",
                width: "auto",
                height: "auto",
                border: "1px solid black",
                color: "white",
                backgroundColor: "#1b3b50"
            }}>

<h1 style={{
            textAlign: "center",
            fontSize: "60px"
        }}>You Found Sid~!</h1>

<div style={{
                alignContent: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                // paddingBottom: "8vh"
            }}>   
<img
            width="300px"
            height="300px"
            src={SecretOne}
            alt="Sid"
          ></img>

          <img
            width="300px"
            height="300px"
            src={SecretTwo}
            alt="Sid Again"
          ></img>

<img
            width="300px"
            height="300px"
            src={SecretThree}
            alt="Sid Thrice"
          ></img>

<img
            width="300px"
            height="300px"
            src={SecretFour}
            alt="Sid Again Squared"
          ></img>

<img
            width="300px"
            height="300px"
            src={SecretFive}
            alt="Sid the Fifth"
          ></img>

          </div>
          <h1 style={{
            textAlign: "center",
            fontSize: "40px"
        }}>Sid is the mascot of the Code Bandits!</h1>
</div>

<div style={{
                alignContent: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                color: "white",
                backgroundColor: "#1b3b50"
                // paddingBottom: "8vh"
            }}>
    <h1 style={{
        height: "24vh",
        width: "100vw",
        margin: "1%"
    }}>Did you know that the White House once had it&apos;s own raccoon? Her name was Rebecca and she was given to President Calvin Coolidge
        in 1926 to be eaten for Thanksgiving dinner! But he refused and kept her as a pet instead. She lived for 3 years</h1>

        <h1 style={{
            height: "24vh",
            width: "100vw",
            margin: "1%"
        }}>There is an island off the coast of Mexico called Cozumel that has a species of dwarf raccoons, called Pygmy raccoons or Cozumel Raccoons.
            Due to the size of the island there&apos;s only about 250-300.</h1>

        <h1 style={{
            height: "24vh",
            width: "100vw",
            margin: "1%"
        }}>not only do raccoons have five fingers like humans but they also use their hands like we do! Raccoons are more than capable of opening many things.
            Though their thumbs are not opposable like ours they don&apos;t let that stop them!</h1>

        <h1 style={{
            height: "24vh",
            width: "100vw",
            margin: "1%"
        }}>While raccoons have a similar way of seeing in the dark to cats, they are unfortunately color blind with limited depth preception and a rather narrow filed of vision.
            Many scientists believe that the mask like markings on their faces help protect their vision from glares and improve their night vision.</h1>

        <h1 style={{
            height: "24vh",
            width: "100vw",
            margin: "1%"
        }}>Did you know that the White House once had it&apos;s own raccoon? Her name was Rebecca and she was given to President Calvin Coolidge
        in 1926 to be eaten for Thanksgiving dinner! But he refused and kept her as a pet instead. She lived for 3 years</h1>
</div>

        </>
    )
}