import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations.js";
import useConversation from "../../zustand/useConversation.js";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return alert("Search keyword must be greater than length 2");
    }
    const conversation = conversations.find((user) =>
      user.lname.toLowerCase().includes(search.toLowerCase()) 
      ||
      user.fname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      alert("No User Found!");
    }
  };
  return (
    <form
      className="flex items-center gap-2  bg-gray-800 p-2 rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-gray-800 px-2 border-none outline-none"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit" className="bg-red-500 p-3 rounded-full  text-white">
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchInput;
