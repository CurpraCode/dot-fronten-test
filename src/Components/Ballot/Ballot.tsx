import React, { useState, useEffect } from "react";
import api from "../../Api/Api";
import "./Ballot.css";
import ResultModal from "../modal/ResultModal";

interface BallotCategory {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    photoUrL: string;
  }[];
}
const Ballot: React.FC = () => {
  const [ballotData, setBallotData] = useState<BallotCategory[]>([]);
  const [selectedCards, setSelectedCards] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    api
      .getBallotData()
      .then((data) => setBallotData(data.items))
      .catch((error) => console.error(error));
  }, []);

  const handleSelect = (categoryId: any, itemId: any) => {
    setSelectedCards({ ...selectedCards, [categoryId]: itemId });
  };
  console.log(selectedCards);
  return (
    <div className="ballot">
      <h1>GOLDEN GLOBE AWARD</h1>
      <div>
        {ballotData.map((ballotCategory: any) => {
          return (
            <div className="cat-container" key={ballotCategory.id}>
              <h2 className="cat-heading">{ballotCategory.title}</h2>
              <div className="cat-section">
                {ballotCategory.items.map((item: any) => {
                  const isSelected =
                    selectedCards[ballotCategory.id] === item.id;
                  return (
                    <div
                      className={`cat-card ${isSelected ? "selected" : ""}`}
                      key={item.id}
                    >
                      <h3>{item.title}</h3>
                      <img src={item.photoUrL} alt="" />
                      <button
                        onClick={() => handleSelect(ballotCategory.id, item.id)}
                      >
                        Select Button
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <ResultModal results={selectedCards} />
      </div>
    </div>
  );
};

export default Ballot;
