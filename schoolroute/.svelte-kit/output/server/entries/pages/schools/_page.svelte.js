import { F as ensure_array_like, D as attr, I as escape_html, B as pop, z as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let columnNames = [];
  let schoolRoutes = [];
  let searchQuery = "";
  let filteredRoutes = [];
  filteredRoutes = schoolRoutes.filter((route) => {
    return true;
  });
  function routeRow($$payload2, routeInfo) {
    const each_array = ensure_array_like(columnNames);
    $$payload2.out.push(`<tr><!--[-->`);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let column = each_array[i];
      if (i == 0) {
        $$payload2.out.push("<!--[-->");
        $$payload2.out.push(`<th class="text-[0.75rem]">${escape_html(routeInfo[column])}</th>`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<td class="text-[0.75rem]">${escape_html(routeInfo[column])}</td>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
    $$payload2.out.push(`<!--]--></tr>`);
  }
  const each_array_1 = ensure_array_like(columnNames);
  $$payload.out.push(`<div class="card p-8 m-8 shadow-sm drop-shadow-3xl"><h1 class="font-semibold text-2xl pb-4">School Bus Services</h1> <div class="pb-6"><input type="text" placeholder="Search routes, schools, addresses..."${attr("value", searchQuery)} class="input input-bordered w-full max-w-lg"/></div> <div class="overflow-x-auto"><table class="table table-xs"><thead><tr><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let column = each_array_1[$$index_1];
    $$payload.out.push(`<th>${escape_html(column)}</th>`);
  }
  $$payload.out.push(`<!--]--></tr></thead><tbody>`);
  if (filteredRoutes.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array_2 = ensure_array_like(filteredRoutes);
    $$payload.out.push(`<!--[-->`);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let route = each_array_2[$$index_2];
      routeRow($$payload, route);
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<tr><td${attr("colspan", columnNames.length)} class="text-center text-gray-500 py-4">No routes found</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div></div>`);
  pop();
}
export {
  _page as default
};
