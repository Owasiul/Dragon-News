import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ nDetails }) => {
  const { title, image_url, details, thumbnail_url, category_id } = nDetails;
  return (
    <div className="max-w-4xl mt-5">
      {/* News Card */}
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
        {/* Image */}
        <figure>
          <img
            src={image_url || thumbnail_url}
            alt={title || "News image"}
            className="w-full h-56 object-cover rounded-t-xl"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold text-gray-900 mb-3">
            {title}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">{details}</p>

          {/* Footer Link */}
          <div className="card-actions justify-start">
            {/* Replace <a> with <Link> if routing */}
            <Link
              to={`/caterogy/${category_id}`}
              className="btn flex items-center gap-2 text-white bg-secondary font-medium"
            >
              <ArrowLeft size={18} /> All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
