
import Header from "../components/header";
import RightComponent from "../components/RightComponent";
import LeftComponent from "../components/LeftComponent";
import Footer from "../components/Footer";
import JamboShortCodes from "../components/JamboShortCodes";
import JamboBulkSms from "../components/JamboBulkSms";
export default function ServicesPage() {
  return (
    <>
        <Header/>  

        <RightComponent/>
        <LeftComponent/>
        <JamboShortCodes/>
        <JamboBulkSms/>

        <Footer/>

    </>
  )
}