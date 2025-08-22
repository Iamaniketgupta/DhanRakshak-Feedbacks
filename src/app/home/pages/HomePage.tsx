"use client";
import Image from "next/image";
import React from "react";
import { formatDate } from "../utils/datetime";
import { ReadMore } from "../components/ReadMore";

interface Review {
  _id: number;
  user_id: {
    name: string;
    avatar: string;
  };
  rating: number;
  feedback: string;
  createdAt: string;
}

interface HomePageProps {
  data: Review[];
}

export default function HomePage({ data }: HomePageProps) {
  // console.log(data)
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-amber-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-mono mb-4 tracking-tight">
            What People Say About Dhan Rakshak
          </h1>
          <p className="text-xl text-stone-100 max-w-2xl font-mono mx-auto">
            We value the experiences of our users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((review) => (
            <div
              key={review._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 group"
            >
              <div className="p-6">
                <div className="flex items-start mb-5">
                  <div className="relative">
                    <Image
                      src={review.user_id.avatar || "/default-avatar.png"}
                      width={50}
                      height={50}
                      alt={review.user_id.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 right-1 bg-white rounded-full p-1 shadow-md">
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {review.user_id.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500 font-medium">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                  <ReadMore text={review.feedback} maxChars={100} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {[data].length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-3">
              No feedback yet
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Be the first to share your experience with Dhan Rakshak and help
              others discover our app.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
