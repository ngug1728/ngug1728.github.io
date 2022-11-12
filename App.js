function Page({head,body}){
return (
<div>
  <section>
  <p>{head}</p>
  </section>
  <section>
  <p>{body}</p>
  </section>
  </div>
);
}

export default function App(){
return (
  <div>
  <h1>HUMBLE SYSTEMS</h1>
<Page 
  head=""
  body=""
  />
  </div>
);
}
