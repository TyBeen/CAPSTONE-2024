import {Footer} from "flowbite-react";

export default function FooterBar () {


    return (
        <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="./frontend/src/assets/5.png"
            alt="Upright Logo"
            name="Capstone Portal"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Upright Education Homepage</Footer.Link>
            <Footer.Link href="#">Upright Bootcamps</Footer.Link>
            <Footer.Link href="#">Contact Capstone Portal Admin</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Capstone Portal" year={2024} />
      </div>
    </Footer>
    )
}