import React from "react";
import data from "../data";

function Accordion() {
  // State for storing selected IDs for the accordion items
  const [selectedIds, setSelectedIds] = React.useState([]);
  // State for toggling multi-selection mode
  const [isMultiSelect, setIsMultiSelect] = React.useState(false);

  // Handle click on an accordion item (question)
  const handleClick = (id) => {
    if (isMultiSelect) {
      // Multi-select mode: toggle the item selection on/off
      setSelectedIds((prev) => {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)  // If already selected, remove it
          : [...prev, id];  // Else, add it to the selected items
      });
    } else {
      // Single-select mode: Only one item can be selected at a time
      setSelectedIds((prev) => (prev.includes(id) ? [] : [id])); // Toggle the selection of one item
    }
  };

  // Toggle between multi-select and single-select mode
  const toggleMultiSelect = () => {
    setIsMultiSelect((prev) => !prev);
  };

  return (
    <>
      {/* Button to enable/disable multi-selection mode */}
      <button
        style={{
          marginBottom: "10px",
          backgroundColor: "black",
          fontWeight: "bold",
          color: "white",
        }}
        onClick={() => toggleMultiSelect()}
      >
        {isMultiSelect ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      {/* Conditional rendering if data is empty */}
      {data.length === 0 ? (
        <div>Data not found</div>  // Display message if no data
      ) : (
        // Iterate over the data to create an accordion item for each
        data.map((e) => (
          <div
            key={e.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            {/* Question Section */}
            <div
              onClick={() => handleClick(e.id)}  // Trigger selection when question is clicked
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: 0 }}>{e.question}</h3>  {/* Display the question */}
              <span style={{ fontSize: "1.2rem" }}>
                {/* Show an arrow depending on whether the item is selected or not */}
                {selectedIds.includes(e.id) ? "▲" : "▼"}
              </span>
            </div>

            {/* Dropdown Answer Section */}
            <div
              style={{
                maxHeight: selectedIds.includes(e.id) ? "200px" : "0",  // Expand or collapse based on selection
                overflow: "hidden",  // Hide overflow when collapsed
                backgroundColor: "#fff",
                padding: selectedIds.includes(e.id) ? "10px" : "0 10px",  // Adjust padding when expanded
              }}
            >
              <p style={{ margin: 0 }}>{e.answer}</p>  {/* Display the answer */}
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Accordion;
