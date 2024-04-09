import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='w-full mt-3 mb-2 bg-gray-50 px-3'>
                <hr />
            </div>
			<Conversations />
		</div>
	);
};
export default Sidebar;