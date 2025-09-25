const Reviews = ({ review, userReview }) => {
    return(
        <>
            <div className="mt-4">
                <h1 className="text-2xl mb-4">Reviews({review})</h1>
                { review === 0 ? <div>No reviews avaiable</div> : '' }
                {
                    userReview.map(user => (
                        <div className="w-3/5 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 bg-[#d6d6d6] rounded-3xl"><img src="" alt="" /></div>
                            <div>
                                <p className="font-bold text-xl">{user.userid}</p>
                                <p className="text-[14px] text-[#9b9b9b]">{user.createdAt}</p>
                            </div>
                        </div>
                        <p>{user.comment}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Reviews