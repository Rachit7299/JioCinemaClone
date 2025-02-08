import { useState } from "react";
import { useLocation } from "react-router-dom";

const data = {
    "categories": [
      {
        "id": 1,
        "name": "Home",
        "tags": [
          { "id": 1, "name": "Trending" },
          { "id": 2, "name": "New Releases" },
          { "id": 3, "name": "Popular" },
          { "id": 4, "name": "Recommended" },
          { "id": 5, "name": "Top Rated" },
          { "id": 6, "name": "Recently Added" },
          { "id": 7, "name": "Editor's Picks" },
          { "id": 8, "name": "Family Friendly" },
          { "id": 9, "name": "Award Winners" },
          { "id": 10, "name": "Critically Acclaimed" }
        ]
      },
      {
        "id": 2,
        "name": "Movies",
        "tags": [
          { "id": 11, "name": "Action" },
          { "id": 12, "name": "Adventure" },
          { "id": 13, "name": "Comedy" },
          { "id": 14, "name": "Drama" },
          { "id": 15, "name": "Fantasy" },
          { "id": 16, "name": "Horror" },
          { "id": 17, "name": "Mystery" },
          { "id": 18, "name": "Romance" },
          { "id": 19, "name": "Sci-Fi" },
          { "id": 20, "name": "Thriller" }
        ]
      },
      {
        "id": 3,
        "name": "Kids",
        "tags": [
          { "id": 21, "name": "Animation" },
          { "id": 22, "name": "Educational" },
          { "id": 23, "name": "Family" },
          { "id": 24, "name": "Fantasy" },
          { "id": 25, "name": "Adventure" }
        ]
      },
      {
        "id": 4,
        "name": "Sports",
        "tags": [
          { "id": 26, "name": "Football" },
          { "id": 27, "name": "Basketball" },
          { "id": 28, "name": "Cricket" },
          { "id": 29, "name": "Tennis" },
          { "id": 30, "name": "Motorsports" }
        ]
      },
      {
        "id": 5,
        "name": "TV Shows",
        "tags": [
          { "id": 31, "name": "Drama" },
          { "id": 32, "name": "Comedy" },
          { "id": 33, "name": "Thriller" },
          { "id": 34, "name": "Reality" },
          { "id": 35, "name": "Documentary" },
          { "id": 36, "name": "Sci-Fi" },
          { "id": 37, "name": "Fantasy" },
          { "id": 38, "name": "Mystery" },
          { "id": 39, "name": "Crime" },
          { "id": 40, "name": "Romance" }
        ]
      }
    ]
  };

interface TagProps {
    category: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    filter: string;
  }

const Tags: React.FC<TagProps> = ({category,setFilter,filter}) => {

    return (
        <div className="tags flex gap-4 p-4 ps-9 bg-gray-950 overflow-x-auto">
            {
                data.categories.map((cat) => {
                    if(cat.name===category){
                        return cat.tags.map((tag) => {
                            return <div key={tag.id} className={`tag text-nowrap cursor-pointer text-xs font-bold p-2 ps-4 pe-4 rounded-full ${filter===tag.name?'text-black bg-white':'text-white bg-gray-700'}`} onClick={()=>setFilter(tag.name)}>{tag.name}</div>
                        })
                    }
                })
            }
        </div>
    );
}

export default Tags;