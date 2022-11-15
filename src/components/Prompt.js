import './Prompt.css';

export const PromptComponents = (props) => {

  return (

    <div className="container-body" 
    /* style={{
      backgroundColor: 'transparent',
      backgroundImage: `url(
        ${"https://source.unsplash.com/xzJ92bNCXHA/1600x900"}
      )`,
      backgroundSize: 'cover' 
    }} */
    >
      <div className="container-wrapper">
        <div className="container-prompt">
          {props.children}
        </div>
      </div>
    </div>    
    
  );
  
}
