async function u(t){return await(await fetch(t)).text()}function h(t){const s=t.trim().split(`
`),e=s.shift().split(",");return s.map(o=>{const r=o.match(/"([^"]*)"|[^,]+/g).map(a=>a.replace(/^"|"$/g,"").trim()),n={};return e.forEach((a,i)=>n[a.trim()]=r[i]),n})}function l(t){return[t.replace("MULTILINESTRING ((","").replace("))","").split(",").map(o=>{const[r,n]=o.trim().split(/\s+/).map(Number);return[n,r]})]}function d(){return`hsl(${Math.floor(Math.random()*360)}, 90%, 60%)`}const c=`
You are a helpful AI analyst.
You will be provided the name of a school and a bus route in the Australian Capital Territory.
Provide a concise response in under 90 words on how consistent, reliable, efficient and busy this bus route is for school children to get to that school.
Make sure your responses are honest, factual, and objective and avoid providing misinformation or using outdated data.
In the first sentence of your response you must provide context by saing the bus route number, name and the school it goes to.
Avoid any styling in your responses.
`;async function p(t,s){try{const e=await fetch("https://ai-worker.kosta-buntsev.workers.dev/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:c},{role:"system",content:`This is the route chosen by the user: ${JSON.stringify(s)}, and this is the school the user wants to analyse this route for: ${JSON.stringify(t)}.`},{role:"user",content:"Asses my chosen route and school and determine if it is a valid choice to get to that school."}]})});return e.ok?(await e.json()).choices[0].message.content:`Request failed: ${e.status}`}catch{return"Error calling chat API."}}export{d as g,u as l,h as p,p as s,l as w};
