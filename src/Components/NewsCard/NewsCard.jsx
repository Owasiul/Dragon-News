import React from "react";
import {
  Clock,
  Eye,
  Star,
  TrendingUp,
  Bookmark,
  Share2,
  MessageCircle,
} from "lucide-react"; // Added Bookmark, Share2, MessageCircle
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating: { number: ratingNum, badge: ratingBadge },
    total_view: totalView,
    author: { name: authorName, published_date: publishedDate, img: authorImg },
    thumbnail_url: thumbnailUrl,
    image_url: imageUrl, // Now using both if different; fallback to thumbnail
    details,
    tags,
    others: { is_trending: isTrending },
  } = news;

  // Format date
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Truncate details for excerpt
  const excerpt =
    details.length > 150 ? `${details.slice(0, 150)}...` : details;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200 rounded-xl overflow-hidden">
      {/* Card Image - Using thumbnail; if image_url differs, could overlay or use as inset (e.g., phone mockup) */}
      <figure className="relative overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Optional inset image simulation (e.g., phone screen mockup) - customize as needed */}
        {imageUrl && imageUrl !== thumbnailUrl && (
          <div className="absolute bottom-2 right-2 w-20 h-24 bg-black/50 rounded opacity-80 p-1">
            <img
              src={imageUrl}
              alt="Inset preview"
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}
        {isTrending && (
          <div className="absolute top-2 right-2 badge badge-warning gap-1 z-10">
            <TrendingUp size={12} />
            Trending
          </div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 md:p-6">
        {/* Header: Author left, Actions right */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100">
                <img src={authorImg} alt={authorName} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-sm truncate">{authorName}</h5>
              <div className="flex items-center gap-1 text-xs text-base-content/70">
                <Clock size={12} />
                <span className="truncate">
                  {new Date(publishedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
          {/* Bookmark and Share - Top right actions */}
          <div className="flex items-center gap-2 ml-2">
            <button className="btn btn-ghost btn-xs p-1">
              <Bookmark
                size={16}
                className="text-base-content/60 hover:text-primary"
              />
            </button>
            <button className="btn btn-ghost btn-xs p-1">
              <Share2
                size={16}
                className="text-base-content/60 hover:text-primary"
              />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg md:text-xl font-bold mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Date & Tag Cloud below "image" position - but since image is above, place here for flow */}
        <div className="text-xs text-base-content/70 mb-2">
          {formattedDate} | Tag Cloud Tags: {tags.join(", ")}
        </div>

        {/* Excerpt */}
        <p className="text-sm text-base-content/80 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Button */}
        <div className="mb-4">
          <Link
            to={`/news-details/${id}`}
            className="btn btn-link text-amber-500 no-underline hover:no-underline"
          >
            Read More
          </Link>
        </div>

        {/* Tags as Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 5).map(
            (
              tag,
              index // Limit to 5 for cloud-like
            ) => (
              <span
                key={index}
                className="badge badge-outline badge-xs text-xs"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Bottom Stats & Rating */}
        <div className="flex items-center justify-between pt-2 border-t border-base-200">
          <div className="flex items-center gap-3 text-sm">
            {/* Rating Stars */}
            <div className="rating rating-sm">
              <input
                type="radio"
                name={`rating-${news.id}`}
                className="mask mask-star bg-warning"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-${news.id}`}
                className="mask mask-star bg-warning"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-${news.id}`}
                className="mask mask-star bg-warning"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-${news.id}`}
                className="mask mask-star bg-warning"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-${news.id}`}
                className="mask mask-star bg-warning"
              />
            </div>
            <span className="text-base-content/70 ml-1">{ratingNum}</span>
            {/* Badge */}
            <div className="badge badge-ghost badge-xs">{ratingBadge}</div>
          </div>
          {/* Views with circle icon */}
          <div className="flex items-center gap-1 text-sm text-base-content/70">
            <MessageCircle size={16} className="w-4 h-4" />{" "}
            {/* Or use Eye if preferred */}
            <span>{totalView.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
