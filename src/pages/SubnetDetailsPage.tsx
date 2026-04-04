import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData"
import { type Subnet } from "../utils/dataUtils";
import { Container } from "lucide-react";

const SubnetDetailsPage = () => {
    const { subnetAddress } = useParams();
    const subnet: Subnet = subnetAddress ? fakeData[subnetAddress] : null;

    return (
        <div className="flex flex-col flex-1">
           

        </div>
    );
};

export default SubnetDetailsPage;