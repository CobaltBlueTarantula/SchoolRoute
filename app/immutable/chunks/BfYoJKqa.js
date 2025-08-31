async function u(t){return await(await fetch(t)).text()}function l(t){const o=t.trim().split(`
`),e=o.shift().split(",");return o.map(s=>{const a=s.match(/"([^"]*)"|[^,]+/g).map(r=>r.replace(/^"|"$/g,"").trim()),n={};return e.forEach((r,i)=>n[r.trim()]=a[i]),n})}function d(t){return[t.replace("MULTILINESTRING ((","").replace("))","").split(",").map(s=>{const[a,n]=s.trim().split(/\s+/).map(Number);return[n,a]})]}function h(){return`hsl(${Math.floor(Math.random()*360)}, 90%, 60%)`}const c=`
You are a helpful AI analyst.
You will be provided the name of a school and a bus route in the Australian Capital Territory.
Provide a concise response in under 80 words on how consistent, reliable, efficient and busy this bus route is for school children to get to that school.
Make sure your responses are honest, factual, and objective and avoid providing misinformation or using outdated data.
In the first sentence of your response you must provide context by saing the bus route number, name and the school it goes to.
Do not mention exact coordinates in your response, instead make it very easy to understand by using distances in meters.
Avoid any styling in your responses.
`;async function p(t,o){try{const e=await fetch("https://ai-worker.kosta-buntsev.workers.dev/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:c},{role:"user",content:`Chosen route data: ${JSON.stringify(o)}, Chosen school data: ${JSON.stringify(t)}.`}]})});if(!e.ok)throw new Error(`Request failed: ${e.status}`);return(await e.json()).choices[0].message.content}catch(e){return console.error("Error calling chat API:",e),"Failed to call the chat API. Please try again later."}}export{h as g,u as l,l as p,p as s,d as w};
