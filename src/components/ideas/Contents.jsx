"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contents() {
  const [ideas, setIdeas] = useState([]);
  const [sortedIdeas, setSortedIdeas] = useState("-published_at");
  const [appendedIdeas, setAppendedIdeas] = useState("medium_image");
  const [pageSizes, setPageSizes] = useState(8);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchTotalItems = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas"
        );
        setTotalItems(response.data.data.length);
        setTotalPages(Math.ceil(response.data.data.length / pageSizes));
      } catch (error) {
        console.error("Error fetching total items:", error);
      }
    };

    fetchTotalItems();
  }, []);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(
          `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${pageSizes}&append[]=${appendedIdeas}&sort=${sortedIdeas}`
        );
        setIdeas(response.data.data);
        console.log("Ideas fetched:", response.data.data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
    setTotalPages(Math.ceil(totalItems / pageSizes));
  }, [page, pageSizes, sortedIdeas]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  const startItem =
    page === totalPages ? totalItems - pageSizes : (page - 1) * pageSizes + 1;
  const endItem = Math.min(page * pageSizes, totalItems);

  return (
    <div className="flex flex-col w-full relative overflow-x-clip">
      <div className="bg-white h-[25vh] flex w-[140%] absolute top-[-5rem] lg:top-[-5rem] left-[-10%] -rotate-3" />
      <div className="bg-white min-h-screen flex flex-col justify-center items-center text-black p-8 lg:p-16 z-10">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full flex items-end py-4">
            <p>
              Showing: {startItem} - {endItem} of {totalItems}
            </p>
          </div>
          <div className="w-full flex gap-4 justify-end py-4">
            <div className="flex flex-row gap-4 items-center">
              <p>Show per page: </p>
              <select
                className="p-2 border border-gray-300 rounded-lg"
                value={pageSizes}
                onChange={(e) => {
                  setPageSizes(parseInt(e.target.value));
                  setPage(1);
                }}
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
              </select>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <p>Sort by:</p>
              <select
                className="p-2 border border-gray-300 rounded-lg"
                value={sortedIdeas}
                onChange={(e) => setSortedIdeas(e.target.value)}
              >
                <option value="-published_at">Newest</option>
                <option value="published_at">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-6">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="flex flex-col w-full relative overflow-clip rounded-lg lg:rounded-xl shadow-xl"
            >
              <Image
                src={"https://placehold.co/600x400/png"}
                width={1000}
                height={1000}
                className="h-auto w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                alt={idea.title}
              />
              <div className="flex flex-col flex-wrap p-4">
                <p className="text-xs lg:text-sm text-slate-400">
                  {new Date(idea.published_at).toDateString()}
                </p>
                <p className="line-clamp-3 text-sm lg:text-base hover:text-orange-suit-500 hover:scale-[101%] transition-color duration-150">
                  {idea.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center items-center mt-6 lg:mt-12">
          <button
            className="p-2 rounded-lg"
            onClick={handleFirstPage}
            disabled={page === 1}
          >
            {"<<"}
          </button>
          <button
            className="p-2 rounded-lg"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`p-2 rounded-lg ${
                page === index + 1 ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 rounded-lg"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            {">"}
          </button>
          <button
            className="p-2 rounded-lg"
            onClick={handleLastPage}
            disabled={page === totalPages}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
