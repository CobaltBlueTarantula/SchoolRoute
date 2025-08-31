async function u(t){return await(await fetch(t)).text()}function l(t){const s=t.trim().split(`
`),e=s.shift().split(",");return s.map(o=>{const a=o.match(/"([^"]*)"|[^,]+/g).map(r=>r.replace(/^"|"$/g,"").trim()),n={};return e.forEach((r,i)=>n[r.trim()]=a[i]),n})}function d(t){return[t.replace("MULTILINESTRING ((","").replace("))","").split(",").map(o=>{const[a,n]=o.trim().split(/\s+/).map(Number);return[n,a]})]}function h(){return`hsl(${Math.floor(Math.random()*360)}, 90%, 60%)`}const c=`
You are a helpful AI analyst who must assess bus routes in the Australian Capital Territory.
Given school data and route data, provide a concise response in under 80 words on how consistent, reliable, efficient and busy this bus route is for school children to get to that school.
Avoid providing misinformation or using outdated data to ensure responses are factual.
Stating the bus route number, name and the school it goes to in the first sentence of your response.
Do not mention exact coordinates, longitude or latitude, instead make it very easy to understand by using metric distances.
Avoid any styling in your response.
`;async function p(t,s){try{const e=await fetch("https://ai-worker.kosta-buntsev.workers.dev/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:c},{role:"user",content:`Chosen route data: ${JSON.stringify(s)}, Chosen school data: ${JSON.stringify(t)}.`}]})});if(!e.ok)throw new Error(`Request failed: ${e.status}`);return(await e.json()).choices[0].message.content}catch(e){return console.error("Error calling chat API:",e),"Failed to call the chat API. Please try again later."}}export{h as g,u as l,l as p,p as s,d as w};
