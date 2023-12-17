export default function TextWrapper() {
    const textArray = [];
  
    for (let i = 0; i < 4; i++) {
      textArray.push(
        <div key={i} className="text prevent-select">
          Art Institute Of Chicago - exhibitions - artworks -
        </div>
      );
    }
  
    return (
        <div className="text-wrapper">
          {textArray} 
        </div>
      
    );
  }