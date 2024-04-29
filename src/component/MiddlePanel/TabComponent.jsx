export default function TabComponent({ tabs }){
  return(
  <div className="tabs">
  {tabs.map((tab, index) => (
    <div className="tab-2" key={index}>
      <label htmlFor={`tab-${index}`}>{tab.label}</label>
      <input id={`tab-${index}`} name="tabs" type="radio" defaultChecked={index === 0} />
      <div>
        <p>{tab.content}</p>
      </div>
    </div>
  ))}
</div>
);
}