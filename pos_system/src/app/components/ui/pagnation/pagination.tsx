import React from "react";
import { PaginationProps } from "../../common/userObject";

export default function PaginationControls({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Buttons */}
      <div className="flex items-center justify-center flex-wrap gap-1">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`px-3 py-1 rounded ${
              page === index + 1
                ? "bg-blue-600 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>

      {/* Page Info */}
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>
    </div>
  );
}
