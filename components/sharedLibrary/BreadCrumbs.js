import Link from "next/link"

export default ({ breadcrumbs }) => {
  return (
    <div>
      <style>{`
    .breadcrumb-container{
      width:100%;
      background:white;    
    }
    
    .bcca-breadcrumb {
      margin: 0 auto;
      
    }
    
    /*** breadcrumb container ***/
    .bcca-breadcrumb {
      display: flex;
      flex-direction: row-reverse;
      flex-shrink: 0;
      width: 100%;
      max-width: 600px;
      margin-bottom: 15px;
      position: relative;
      justify-content: flex-end;
    }
    
    /*** breadcrumb items ***/
    .bcca-breadcrumb-item {
      transition: all 0.2s ease-in-out;
      height: 50px;
      background: white;
      box-shadow: 0px 0px 1px -2px #d9d9d9;
      line-height: 50px;
      padding-left: 50px;
      padding-right: 25px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(74, 74, 74, 0.8);
      position: relative;
      float: left;
    }
    
    .bcca-breadcrumb-item:after {
      transition: all ease-in-out 0.2s;
      content: "";
      position: absolute;
      left: calc(100% - 10px);
      top: 7px;
      z-index: 1;
      width: 0;
      height: 0;
      border: 18px solid #ffffff;
      border-left-color: transparent;
      border-bottom-color: transparent;
      box-shadow: 0px 0px 0 0px #d9d9d9, 5px -5px 10px -4px #d9d9d9;
      transform: rotate(45deg);
      margin-left: -9px;
    }
    
    .bcca-breadcrumb-item:last-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding-left: 10px;
      box-shadow: 0px 0px 0px 0px #d9d9d9;  
    }
    
    .bcca-breadcrumb-item:first-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #007f3b;
      box-shadow: 0px 0px 0px 0px #d9d9d9;  
    }
    
    .bcca-breadcrumb-item:first-child:after {
      content: "";
      display: none;
    }
    
    .bcca-breadcrumb-item i {
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.2);
    }
    
    /*** hover breadcrumbs ***/
    .bcca-breadcrumb-item:hover {
      background-color: #f9f9f9;
    }
    
    .bcca-breadcrumb-item:hover:after {
      border: 18px solid #f9f9f9;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
    
    .bcca-breadcrumb-item:first-child:hover {
      background-color: unset;
    }
    a.bcca-breadcrumb-item{
      text-decoration:none;
    }
    
  `}</style>
      <div className="breadcrumb-container">
        <div class="bcca-breadcrumb">
          {breadcrumbs.reverse().map((b, i) =>
            i !== 0 ? (
              <Link href={b.link}>
                <a class="bcca-breadcrumb-item">{b.name}</a>
              </Link>
            ) : (
              <div class="bcca-breadcrumb-item">{b.name}</div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
