
import data from "../../fakeData/staticData";
import AddressSummary from "../components/AddressSummary";

const HomePage = () => {
  return (
    <div >
      <AddressSummary data={data} totalAllocatedAddresses={13} />
    </div>
  );
};



export default HomePage;