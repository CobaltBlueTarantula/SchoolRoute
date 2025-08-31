import "clsx";
import { B as pop, z as push, N as fallback, F as ensure_array_like, D as attr, R as maybe_selected, M as bind_props } from "../../../chunks/index2.js";
function RouteInfo($$payload, $$props) {
  push();
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded"><h2 class="font-semibold text-lg mb-2">Please select:</h2> <ul class="list-disc ml-6">`);
    {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<li>A <span class="font-bold">school</span></li>`);
    }
    $$payload.out.push(`<!--]--> `);
    {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<li>A <span class="font-bold">route</span> on the map</li>`);
    }
    $$payload.out.push(`<!--]--></ul></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function RouteMap($$payload, $$props) {
  push();
  $$payload.out.push(`<div id="map" class="card bg-base-100 h-[80vh] m-4 md:m-8 p-6 md:p-15 shadow-sm drop-shadow-2xl"></div>`);
  pop();
}
function SchoolSelector($$payload, $$props) {
  push();
  let value = fallback($$props["value"], "");
  let schoolNames = [];
  const each_array = ensure_array_like(schoolNames);
  $$payload.out.push(`<input type="text" class="input" placeholder="Select a school" list="schools"${attr("value", value)}/> <datalist id="schools"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let school = each_array[$$index];
    $$payload.out.push(`<option${attr("value", school)}${maybe_selected($$payload, school)}></option>`);
  }
  $$payload.out.push(`<!--]--></datalist>`);
  bind_props($$props, { value });
  pop();
}
function _page($$payload, $$props) {
  push();
  let schoolInput = "";
  $$payload.out.push(`<div class="flex flex-col md:flex-row w-full"><section class="md:w-1/3 h-76"><div class="mb-10 shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-10 card bg-base-100"><h1 class="font-semibold text-2xl pb-6">Public Transport Services</h1> <h2 class="pb-3">Search Schools</h2> `);
  SchoolSelector($$payload, { value: schoolInput });
  $$payload.out.push(`<!----></div> <div class="mb-10 shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-10 card bg-base-100">`);
  RouteInfo($$payload);
  $$payload.out.push(`<!----></div></section> <section class="md:w-2/3 md:mt-0 mt-32 w-1xl">`);
  RouteMap($$payload);
  $$payload.out.push(`<!----></section></div>`);
  pop();
}
export {
  _page as default
};
