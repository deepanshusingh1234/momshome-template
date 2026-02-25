// components/product/ProductReviews.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
    verified: boolean;
}

interface ProductReviewsProps {
    productId: number;
    productTitle: string;
    productImage?: string;
}

// Mock reviews data (in real app, this would come from an API)
const mockReviews: Review[] = [
    {
        id: "b7d0f7f7-05fb-4ee9-a8d9-f49176f032d5",
        author: "Vanita Gawas",
        rating: 5,
        title: "",
        content: "The cloth is very soft I highly recommend to purchase their product",
        date: "08/06/2025",
        verified: true
    },
    {
        id: "1eefda7c-5c40-48d9-a9eb-d96c8a9d7e77",
        author: "Pavithra Arunkumar",
        rating: 5,
        title: "Good quality",
        content: "Good quality when compared to other brands. To test try, I bought swaddle cloths from six different brands before I can shop the other baby items. Moms home turned out to be a good quality and the cost is appropriate. Thank you!",
        date: "10/16/2024",
        verified: true
    }
];

export default function ProductReviews({ productId, productTitle, productImage }: ProductReviewsProps) {
    const [reviews] = useState<Review[]>(mockReviews);
    const [sortBy, setSortBy] = useState("most-recent");
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewerName, setReviewerName] = useState("");
    const [reviewerEmail, setReviewerEmail] = useState("");
    const [nameFormat, setNameFormat] = useState("");

    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews || 0;

    // Calculate rating distribution
    const ratingCounts = [5, 4, 3, 2, 1].map(star =>
        reviews.filter(r => r.rating === star).length
    );

    const ratingPercentages = ratingCounts.map(count =>
        totalReviews > 0 ? (count / totalReviews) * 100 : 0
    );

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle review submission
        console.log({ rating, reviewTitle, reviewContent, reviewerName, reviewerEmail, nameFormat });
        setShowReviewForm(false);
        setFormStep(0);
        setRating(0);
        setReviewTitle("");
        setReviewContent("");
        setReviewerName("");
        setReviewerEmail("");
    };

    const handleNextStep = () => {
        setFormStep(prev => prev + 1);
    };

    const handlePrevStep = () => {
        setFormStep(prev => prev - 1);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div style={{ clear: "both" }}></div>

            <div id="judgeme_product_reviews" className="jdgm-widget jdgm-review-widget">
                <div className="jdgm-rev-widg" data-average-rating={averageRating.toFixed(2)} data-number-of-reviews={totalReviews}>
                    {/* Header */}
                    <div className="jdgm-rev-widg__header">
                        <h2 className="jdgm-rev-widg__title text-xl lg:text-2xl font-semibold text-[#a790d4] text-center mb-6">
                            Customer Reviews
                        </h2>

                        {/* Stars Summary */}
                        <div className="jdgm-row-stars flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6">
                            <div className="jdgm-rev-widg__summary">
                                <div className="jdgm-rev-widg__summary-inner">
                                    <div className="jdgm-rev-widg__summary-stars flex items-center gap-2" aria-label={`Average rating is ${averageRating.toFixed(2)} stars`}>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-5 h-5 ${star <= Math.round(averageRating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="jdgm-rev-widg__summary-average text-lg font-medium">
                                            {averageRating.toFixed(2)} out of 5
                                        </span>
                                    </div>
                                    <div className="jdgm-rev-widg__summary-text text-sm text-gray-600 flex items-center gap-1">
                                        Based on {totalReviews} reviews
                                        <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Rating Histogram */}
                            <div className="jdgm-histogram flex-1 max-w-md">
                                {[5, 4, 3, 2, 1].map((star, index) => (
                                    <div key={star} className="jdgm-histogram__row flex items-center gap-2 mb-1">
                                        <div className="jdgm-histogram__star flex items-center gap-1 w-16">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-3 h-3 ${i < star ? "text-yellow-400" : "text-gray-300"
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="jdgm-histogram__bar flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="jdgm-histogram__bar-content h-full bg-yellow-400"
                                                style={{ width: `${ratingPercentages[5 - star]}%` }}
                                            ></div>
                                        </div>
                                        <div className="jdgm-histogram__frequency text-sm text-gray-600 w-8">
                                            {ratingCounts[5 - star]}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Write Review Button */}
                            <div className="jdgm-widget-actions-wrapper">
                                <button
                                    onClick={() => setShowReviewForm(true)}
                                    className="jdgm-write-rev-link px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors"
                                >
                                    Write a review
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Review Form */}
                    {showReviewForm && (
                        <div className="jdgm-form-wrapper mb-8 border border-gray-200 rounded-lg p-6">
                            <form className="jdgm-form" onSubmit={handleSubmitReview}>
                                <h3 className="jdgm-form__title text-lg font-semibold mb-4">Write a review</h3>

                                {/* Step 1: Rating */}
                                {formStep === 0 && (
                                    <div className="jdgm-form__fieldset mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                                        <div className="jdgm-form__rating flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    className="focus:outline-none"
                                                >
                                                    <svg
                                                        className={`w-6 h-6 transition-colors ${star <= (hoverRating || rating)
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Review Title & Content */}
                                {formStep === 1 && (
                                    <>
                                        <div className="jdgm-form__fieldset mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Review Title
                                            </label>
                                            <input
                                                type="text"
                                                value={reviewTitle}
                                                onChange={(e) => setReviewTitle(e.target.value)}
                                                placeholder="Give your review a title"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                            />
                                        </div>
                                        <div className="jdgm-form__fieldset mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Review content
                                            </label>
                                            <textarea
                                                rows={5}
                                                value={reviewContent}
                                                onChange={(e) => setReviewContent(e.target.value)}
                                                placeholder="Start writing here..."
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Reviewer Info */}
                                {formStep === 2 && (
                                    <>
                                        <div className="jdgm-form__fieldset mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Display name
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={reviewerName}
                                                    onChange={(e) => setReviewerName(e.target.value)}
                                                    placeholder="Display name"
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                                />
                                                <select
                                                    value={nameFormat}
                                                    onChange={(e) => setNameFormat(e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                                >
                                                    <option value="">John Smith</option>
                                                    <option value="last_initial">John S.</option>
                                                    <option value="first_name_only">John</option>
                                                    <option value="all_initials">J.S.</option>
                                                    <option value="anonymous">Anonymous</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="jdgm-form__fieldset jdgm-form__email-fieldset mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                value={reviewerEmail}
                                                onChange={(e) => setReviewerEmail(e.target.value)}
                                                placeholder="Your email address"
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mb-4">
                                            How we use your data: We&apos;ll only contact you about the review you left, and only if necessary.
                                            By submitting your review, you agree to Judge.me&apos;s terms, privacy and content policies.
                                        </p>
                                    </>
                                )}

                                {/* Form Navigation Buttons */}
                                <div className="jdgm-form__fieldset jdgm-form__fieldset-actions flex gap-3">
                                    {formStep > 0 && (
                                        <button
                                            type="button"
                                            onClick={handlePrevStep}
                                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {formStep < 2 ? (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="px-4 py-2 bg-[#232323] text-white rounded-md hover:bg-gray-800 transition-colors"
                                            disabled={formStep === 0 && rating === 0}
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors"
                                        >
                                            Submit Review
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowReviewForm(false);
                                            setFormStep(0);
                                            setRating(0);
                                        }}
                                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Sort Dropdown */}
                    <div className="jdgm-row-actions mb-4">
                        <div className="jdgm-rev-widg__sort-wrapper">
                            <div className="jdgm-sort-dropdown-wrapper inline-block relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="jdgm-sort-dropdown appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                >
                                    <option value="most-recent">Most Recent</option>
                                    <option value="highest-rating">Highest Rating</option>
                                    <option value="lowest-rating">Lowest Rating</option>
                                    <option value="with-pictures">Only Pictures</option>
                                    <option value="pictures-first">Pictures First</option>
                                    <option value="videos-first">Videos First</option>
                                    <option value="most-helpful">Most Helpful</option>
                                </select>
                                <span className="jdgm-sort-dropdown-arrow absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="jdgm-rev-widg__body">
                        <div className="jdgm-rev-widg__reviews space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="jdgm-rev jdgm-divider-top border-t border-gray-200 pt-6">
                                    <div className="jdgm-rev__header mb-2">
                                        <div className="jdgm-row-rating flex items-center gap-2 mb-1">
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg
                                                        key={star}
                                                        className={`w-4 h-4 ${star <= review.rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="jdgm-rev__timestamp text-sm text-gray-500">{review.date}</span>
                                        </div>
                                        <div className="jdgm-row-profile flex items-center gap-2 mb-1">
                                            <div className="jdgm-rev__icon w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                                                {review.author.charAt(0)}
                                            </div>
                                            <span className="jdgm-rev__author-wrapper">
                                                <span className="jdgm-rev__author font-medium">{review.author}</span>
                                                {review.verified && (
                                                    <span className="jdgm-rev__buyer-badge-wrapper ml-2">
                                                        <span className="jdgm-rev__buyer-badge text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                                                            Verified Buyer
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="jdgm-rev__content">
                                        {review.title && (
                                            <b className="jdgm-rev__title block font-medium mb-1">{review.title}</b>
                                        )}
                                        <div className="jdgm-rev__body text-gray-700">{review.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination (if needed) */}
                    {reviews.length > 5 && (
                        <div className="jdgm-paginate flex justify-center gap-2 mt-6">
                            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">1</button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">2</button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">3</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}