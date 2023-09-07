
import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonBook = () => (
    <div className="book-card">

        <ContentLoader 
            speed={2}
            width={250}
            height={340}
            viewBox="0 0 250 340"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
        >
            <rect x="0" y="0" rx="0" ry="0" width="250" height="250" /> 
            <rect x="5" y="272" rx="0" ry="0" width="249" height="17" /> 
            <rect x="4" y="294" rx="0" ry="0" width="148" height="0" /> 
            <rect x="0" y="302" rx="0" ry="0" width="132" height="15" />
        </ContentLoader>
    </div>
)

export default SkeletonBook