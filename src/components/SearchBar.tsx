import { ListFilterPlus, Search } from "lucide-react";
import { Button } from "./Button";
import Input from "./Input";

const SearchBar = () => {
    return (
        <div className="flex flex-row flex-1 items-center gap-2">
            <Input placeholder="Search...." className="py-2.5 text-md border-0 w-96" />
            <Button className="p-2 h-fit w-fit rounded-2xl bg-primary text-form-bg">
                <Search />
            </Button>
            <Button className="p-2 h-fit w-fit rounded-2xl">
                <ListFilterPlus />
            </Button>
        </div>
    );
}

export default SearchBar;