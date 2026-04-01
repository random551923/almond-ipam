interface Ip {
  address_description: string,
  mac_address: string,
  type: string,
}

interface Subnet {
  name: string,
  description: string,
  gateway: string,
  dns_servers: string[],
  subnet_cidr: number,
  allocated_ips: Record<string, Ip>,
  free_ips: Record<string, Ip>,
  allocated_ips_percent: number,
}

/* Convert row data to array of subnets & format it */
const formatData = (rowData: Record<string, Subnet>) => {
    // Added 'return' here so the function actually gives back the array
    return Object.entries(rowData).map(([address, fullSubnet]) => ({
        address: address + "/" + fullSubnet.subnet_cidr,
        ...fullSubnet
    }));
};


/* Calculate the total free, dynamic and reserved addresses */
const countTotalAddresses = (subnetsList: Subnet[]) => {
    let free = 0;
    let dynamic = 0;
    let reserved = 0;

    subnetsList.forEach((subnet: Subnet) => {
        free += Object.keys(subnet.free_ips).length;
        Object.values(subnet.allocated_ips).forEach((ip) => {
            if (ip.type === "dynamic") {
                dynamic++;
            } else if (ip.type === "reserved") {
                reserved++;
            }
        });
    });

    return {
        totalFree: free,
        totalDynamic: dynamic,
        totalReserved: reserved,
        totalAllocated: dynamic+reserved
    };
};


export { formatData, countTotalAddresses };