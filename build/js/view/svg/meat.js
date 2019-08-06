"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meat = void 0;

//export const meat = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//meat.setAttributeNS(null,"height", "511pt");
//meat.setAttributeNS(null,"width", "511pt");
//meat.setAttributeNS(null, "viewBox", "0 0 512 512");
//const path_1 = document.createElementNS('http://www.w3.org/2000/svg', "path");  
//path_1.setAttributeNS(null, "d", "M468.467,125.688c-23.347-18.607-56.3-33.841-97.944-45.277c-80.091-21.994-170.408-24.368-205.522-24.368    C74.019,56.043,0,130.063,0,221.045v69.91c0,90.983,74.019,165.002,165.001,165.002c41.953,0,73.46-13.142,106.817-27.056    c34.496-14.389,70.165-29.267,120.331-29.267c66.086,0,119.851-53.766,119.851-119.851v-69.91    C512,177.034,497.353,148.71,468.467,125.688z M460.046,296.642c3.786,4.023,10.115,4.212,14.136,0.427    c6.782-6.386,12.748-13.501,17.818-21.162v3.876c0,55.059-44.793,99.851-99.851,99.851c-54.17,0-91.718,15.662-128.03,30.808    c-31.457,13.121-61.169,25.515-99.118,25.515c-76.82,0-139.869-60.053-144.693-135.678c28.08,51.073,82.409,85.766,144.693,85.766    c41.953,0,73.46-13.142,106.817-27.056c34.496-14.389,70.165-29.267,120.331-29.267c3.727,0,7.492-0.176,11.192-0.522    c5.499-0.515,9.539-5.39,9.024-10.889c-0.515-5.498-5.396-9.537-10.889-9.023c-3.083,0.288-6.22,0.435-9.327,0.435    c-54.17,0-91.718,15.662-128.03,30.808c-31.457,13.121-61.169,25.515-99.118,25.515c-79.954,0-145.001-65.047-145.001-145    c0-79.954,65.047-145.002,145.001-145.002c34.303,0,122.481,2.305,200.226,23.654C449.347,122.799,492,159.867,492,209.873    c0,27.295-11.492,53.769-31.528,72.633C456.451,286.292,456.26,292.621,460.046,296.642z");
//const path_2 = document.createElementNS('http://www.w3.org/2000/svg', "path");
//path_2.setAttributeNS(null, "d", "M451.823,303.025c-2.352-4.997-8.311-7.142-13.306-4.79c-0.072,0.033-0.167,0.08-0.238,0.115    c-4.939,2.47-6.941,8.477-4.472,13.416c1.752,3.504,5.284,5.53,8.953,5.53c1.482,0,2.986-0.331,4.404-1.028    C452.067,313.875,454.154,307.978,451.823,303.025z");
//const path_3 = document.createElementNS('http://www.w3.org/2000/svg', "path");
//path_3.setAttributeNS(null, "d", "M237.188,98.862l-0.515-0.042c-5.514-0.43-10.325,3.668-10.764,9.174c-0.439,5.505,3.668,10.324,9.173,10.764l0.511,0.04    c0.271,0.022,0.54,0.033,0.808,0.033c5.161,0,9.538-3.97,9.958-9.203C246.799,104.122,242.693,99.303,237.188,98.862z");
//const path_4 = document.createElementNS('http://www.w3.org/2000/svg', "path");
//path_4.setAttributeNS(null, "d", "M465.756,182.933c-9.919-19.604-31.989-36.546-65.599-50.354c-27.195-11.173-56.936-18.231-77.097-22.186    c-12.083-2.369-24.745-4.485-37.635-6.287c-5.467-0.772-10.523,3.048-11.289,8.519c-0.765,5.47,3.049,10.523,8.519,11.288    c12.53,1.752,24.829,3.807,36.556,6.107c68.69,13.471,115.599,36.048,128.699,61.94c2.752,5.441,4.09,11.3,4.09,17.912    c0,33.001-26.849,59.85-59.851,59.85c-33.368,0-65.771,5.453-99.061,16.672c-14.338,4.833-28.26,10.61-41.723,16.198    c-8.905,3.695-18.113,7.517-27.253,10.98c-23.065,8.742-40.744,12.472-59.111,12.472c-57.898,0-105.002-47.103-105.002-105    c0-57.898,47.104-105.002,105.002-105.002c11.295,0,22.762,0.214,34.08,0.636c1.921,0.071,3.844,0.148,5.768,0.233    c5.513,0.25,10.188-4.032,10.431-9.55c0.244-5.517-4.032-10.188-9.549-10.431c-1.97-0.087-3.94-0.166-5.906-0.239    C188.26,96.26,176.543,96.042,165,96.042c-68.926,0-125.002,56.075-125.002,125.002c0,68.925,56.075,125,125.002,125    c20.935,0,40.733-4.118,66.199-13.77c9.431-3.574,18.785-7.456,27.832-11.211c13.153-5.458,26.754-11.103,40.444-15.717    c31.198-10.514,61.512-15.625,92.674-15.625c44.03,0.002,79.851-35.819,79.851-79.848    C472,200.051,469.957,191.239,465.756,182.933z");
//const path_5 = document.createElementNS('http://www.w3.org/2000/svg', "path");
//path_5.setAttributeNS(null, "d", "M174.578,135.82c-27.956,0-50.701,20.625-50.701,45.977s22.745,45.977,50.701,45.977    c27.957,0,50.701-20.625,50.701-45.977S202.535,135.82,174.578,135.82z M174.578,207.773c-16.929,0-30.701-11.653-30.701-25.977    c0-14.323,13.772-25.977,30.701-25.977s30.701,11.653,30.701,25.977C205.279,196.12,191.507,207.773,174.578,207.773z");
//meat.appendChild(path_1);
//meat.appendChild(path_2);
//meat.appendChild(path_3);
//meat.appendChild(path_4);
//meat.appendChild(path_5);
var meat = function meat() {
  return "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -38 511.99976 511\" height=\"75\" width=\"75\">\n\t\t<path d=\"m340.855469 360.015625c-31.207031-.765625-51.027344-15.808594-62.4375-29.53125-10.21875-12.285156-14.707031-29.183594-19.902344-48.753906-7.226563-27.222657-16.222656-61.105469-44.433594-92.300781-27.96875-30.925782-62.554687-44.394532-93.070312-56.277344-45.050781-17.539063-63.332031-26.25-63.332031-66.1875 0-4.367188.015624-13.832032 8.078124-24.730469-35.773437 23.613281-58.679687 53.375-58.128906 86.085937 1.433594 85.121094 89.679688 69.441407 142.328125 127.660157 55.675781 61.566406 11.984375 121.453125 124.777344 165.242187 59.257813 23.003906 158.53125-7.425781 208.304687-130.335937-1.226562 1.554687-76.417968 70.742187-142.183593 69.128906zm0 0\" fill=\"#ea3942\"/><path d=\"m504.378906 201.757812c0 102.953126-86.632812 208.886719-198.441406 186.414063-118.945312-23.910156-72.355469-99.0625-128.027344-160.628906-52.652344-58.21875-146.566406-35.980469-146.566406-127.652344 0-83.058594 143.773438-105.238281 274.59375-84.542969 108.25 17.125 198.441406 83.457032 198.441406 186.410156zm0 0\" fill=\"#f3e8d7\"/><path d=\"m432.207031 65.476562c19.125 26.578126 30.261719 58.210938 30.261719 94.371094 0 102.949219-86.632812 208.882813-198.445312 186.410156-16.882813-3.390624-30.425782-7.820312-41.402344-13.089843 11.132812 24.476562 31.539062 44.597656 83.316406 55.003906 111.808594 22.472656 198.441406-83.460937 198.441406-186.414063 0-57.644531-28.28125-103.804687-72.171875-136.28125zm0 0\" fill=\"#e5d6c1\"/><path d=\"m336.042969 354.375c-16.707031.722656-33.433594-2.070312-48.789063-8.929688-10.394531-4.644531-20.226562-11.183593-26.886718-20.421874-7.242188-10.042969-10.214844-22.449219-13.316407-34.4375-6.597656-25.511719-14.683593-51.160157-29.753906-72.777344-22.253906-31.921875-57.816406-52.195313-94.347656-65.621094-12.863281-4.726562-26.214844-8.855469-37.355469-16.839844-11.140625-7.980468-19.902344-20.867187-18.785156-34.527344 1.4375-17.550781 17.925781-29.851562 34.003906-37.035156 44.292969-19.785156 95.542969-22.671875 143.34375-19.070312 48.734375 3.667968 100.8125 12.59375 144.085938 36.300781 42.734374 23.410156 74.449218 63.84375 78.714843 113.058594 4.195313 48.414062-18.308593 100.660156-55.898437 131.507812-21.023438 17.253907-47.992188 27.625-75.015625 28.792969zm0 0\" fill=\"#fc4e51\"/><path d=\"m466.957031 194.074219c-3.773437-43.53125-29.03125-80.183594-64.390625-104.273438 12.0625 18.171875 19.894532 39.023438 21.867188 61.75 4.195312 48.414063-18.308594 100.660157-55.898438 131.507813-21.027344 17.253906-47.996094 27.625-75.019531 28.792968-14.402344.621094-28.816406-1.375-42.355469-6.332031 2.195313 6.941407 4.96875 13.625 9.207032 19.503907 6.660156 9.238281 16.492187 15.777343 26.886718 20.421874 15.351563 6.859376 32.078125 9.652344 48.789063 8.929688 27.019531-1.167969 53.992187-11.539062 75.015625-28.792969 37.59375-30.847656 60.09375-83.09375 55.898437-131.507812zm0 0\" fill=\"#ea3942\"/><path d=\"m240.335938 112.089844c0 17.273437-14.003907 31.277344-31.277344 31.277344-17.273438 0-31.277344-14.003907-31.277344-31.277344 0-17.273438 14.003906-31.277344 31.277344-31.277344 17.273437 0 31.277344 14.003906 31.277344 31.277344zm0 0\" fill=\"#f3e8d7\"/><path d=\"m450.773438 70.636719c-36.035157-31.550781-87.046876-53.859375-143.648438-62.8125-50.1875-7.941407-102.042969-9.484375-146.015625-4.339844-48.53125 5.675781-86.484375 19.183594-109.753906 39.0625-1.230469 1.050781-2.414063 2.121094-3.5625 3.207031-31.753907 24.773438-48.277344 53.359375-47.7812502 82.695313.4296872 25.527343 8.3984372 45.167969 24.3671872 60.042969 13.992188 13.035156 32.25 21.058593 51.582032 29.550781 23.996093 10.542969 48.808593 21.441406 68.347656 43.050781 19.996094 22.113281 26.511718 44.285156 32.808594 65.730469 5.3125 18.070312 10.800781 36.761719 24.1875 54.125 14.960937 19.410156 37.417968 34.464843 70.671874 47.375 12.996094 5.046875 27.347657 7.527343 42.257813 7.527343 23.578125 0 48.554687-6.210937 71.738281-18.324218 31.15625-16.285156 74.417969-50.871094 103.859375-123.136719 14.230469-28.714844 22.167969-60.746094 22.167969-92.632813 0-50.707031-21.171875-96.046874-61.226562-131.121093zm-71.863282 333.386719c-34.007812 17.777343-71.921875 21.550781-101.417968 10.097656-66.417969-25.785156-75.378907-56.28125-85.753907-91.59375-6.46875-22.011719-13.796875-46.957032-36.132812-71.652344-21.726563-24.027344-49.242188-36.117188-73.519531-46.78125-36.902344-16.214844-66.050782-29.019531-66.84375-75.902344-.203126-12.082031 3.230468-23.191406 8.644531-33.160156-.097657 1.605469-.164063 3.21875-.164063 4.855469 0 27.457031 8.125 48.132812 24.835938 63.214843 14.644531 13.214844 33.773437 20.664063 54.023437 28.546876 24.734375 9.628906 50.308594 19.585937 69.675781 41.003906 19.441407 21.5 25.6875 45.015625 31.722657 67.757812 5.464843 20.574219 10.621093 40.007813 24.691406 56.921875 15.726563 18.910157 39.800781 31.082031 75.761719 38.308594 10.457031 2.101563 20.910156 3.140625 31.269531 3.140625 29.855469 0 58.917969-8.632812 84.917969-25.300781-14.730469 14.34375-29.269532 24.039062-41.710938 30.542969zm97.742188-117.285157c-.257813.402344-.488282.832031-.675782 1.289063-.085937.21875-.179687.425781-.265624.640625-11.859376 23.589843-28.316407 44.707031-48.316407 61.085937-20.054687 16.425782-50.832031 33.890625-91.019531 33.890625-9.160156 0-18.816406-.910156-28.9375-2.941406-70.113281-14.09375-78.328125-45.03125-88.726562-84.203125-6.203126-23.355469-13.230469-49.828125-35.148438-74.066406-21.785156-24.089844-50.296875-35.191406-75.453125-44.984375-38.632813-15.042969-69.148437-26.921875-69.148437-77.5625 0-17.726563 7.5-33.121094 22.292968-45.753907 29.125-24.882812 86.507813-38.453124 154.503906-38.453124 28.25 0 58.339844 2.34375 88.988282 7.191406 53.792968 8.511718 102.089844 29.546875 135.988281 59.226562 36.65625 32.097656 56.027344 73.476563 56.027344 119.660156 0 29.242188-7.199219 58.597657-20.109375 84.980469zm0 0\"/><path d=\"m467.589844 210.132812c-4.207032-.34375-7.878906 2.761719-8.230469 6.953126-3.132813 37.1875-21.707031 74.5625-48.882813 98.941406-9.964843-7.902344-13.878906-20.648438-19.890624-40.261719-5.003907-16.339844-11.234376-36.675781-23.367188-61.523437-11.574219-23.710938-33.082031-43.820313-55.34375-59.660157 16.828125-9.8125 57.5-28.28125 121.617188-25.402343 12.386718 16.253906 20.785156 34.675781 24.347656 54.179687.671875 3.675781 3.875 6.25 7.484375 6.25.457031 0 .917969-.042969 1.378906-.125 4.140625-.757813 6.882813-4.726563 6.125-8.867187-4.195313-22.957032-14.320313-44.535157-29.269531-63.300782-.105469-.148437-.222656-.292968-.34375-.4375-13.484375-16.804687-30.847656-31.332031-51.3125-42.542968-37.734375-20.675782-84.5-32.5-147.175782-37.21875-59.242187-4.464844-107.332031 1.988281-147.019531 19.714843-18.515625 8.269531-30.933593 19.648438-36.019531 32.726563-.039062.101562-.078125.203125-.117188.308594-1.265624 3.34375-2.066406 6.792968-2.355468 10.335937-1.222656 14.925781 7.183594 30.769531 21.941406 41.339844 8.109375 5.8125 17.160156 9.632812 24.140625 12.308593 3.925781 1.511719 8.332031-.453124 9.839844-4.382812 1.507812-3.925781-.453125-8.335938-4.382813-9.839844-6.507812-2.5-14.0625-5.695312-20.722656-10.472656-8.171875-5.855469-16.570312-16.210938-15.628906-27.710938.042968-.503906.109375-1.042968.199218-1.605468 35.75-.683594 76.359376 6.386718 95.613282 10.242187-.035156.664063-.050782 1.335938-.050782 2.007813 0 21.445312 17.449219 38.894531 38.894532 38.894531 13.839844 0 26.007812-7.269531 32.902344-18.1875 25.382812 11.261719 89.722656 43.390625 111.566406 88.128906 11.605468 23.773438 17.640625 43.472657 22.488281 59.300781 6.011719 19.617188 10.664063 34.796876 22.234375 45.4375-18.355469 12.558594-40.640625 20.152344-62.539062 21.101563-16.226563.703125-31.484376-2.082031-45.347657-8.273437-10.664062-4.765626-18.675781-10.792969-23.816406-17.921876-6.070313-8.421874-8.800781-19.019531-11.691406-30.238281l-.425781-1.65625c-6.605469-25.535156-14.914063-52.320312-30.878907-75.222656-17.285156-24.789063-43.988281-45.285156-79.375-60.917969-3.847656-1.703125-8.347656.039063-10.046875 3.890625-1.699218 3.847657.039063 8.34375 3.890625 10.046875 32.792969 14.488282 57.363281 33.226563 73.03125 55.695313 14.589844 20.925781 22.378907 46.167969 28.625 70.324219l.425781 1.644531c3.113282 12.089843 6.335938 24.59375 14.089844 35.34375 6.730469 9.335937 16.808594 17.046875 29.957032 22.921875 14.433593 6.449218 30.105468 9.707031 46.664062 9.707031 1.839844 0 3.695312-.042969 5.558594-.121094 28.71875-1.246093 56.859375-12.015625 79.28125-30.324219.019531-.015624.039062-.03125.054687-.046874.0625-.050782.125-.097657.183594-.144532 33.046875-27.117187 54.96875-69.398437 58.648437-113.109375.355469-4.191406-2.757812-7.878906-6.949218-8.230469zm-234.941406-96.316406c-.621094 4.371094-.789063 7.121094-4.4375 12.140625-4.304688 5.925781-11.28125 9.792969-19.152344 9.792969-12.960938 0-23.515625-10.476562-23.652344-23.40625.492188-8.03125 3.402344-12.472656 3.402344-12.472656 4.148437-6.851563 11.671875-11.441406 20.25-11.441406 13.046875 0 23.660156 10.617187 23.660156 23.660156 0 .582031-.03125 1.15625-.070312 1.726562zm14.769531 4.6875c.347656-2.089844.535156-4.230468.535156-6.414062 0-21.449219-17.449219-38.898438-38.894531-38.898438-15.429688 0-28.789063 9.03125-35.070313 22.082032-18.070312-3.667969-55.464843-10.308594-91.09375-10.703126 4.425781-4.585937 11.074219-9.382812 21.027344-13.828124 37.320313-16.667969 83.003906-22.695313 139.660156-18.433594 60.433594 4.550781 105.238281 15.796875 140.996094 35.390625 13.242187 7.253906 25.042969 16.015625 35.160156 25.933593-68.390625.023438-108.71875 22.792969-121.773437 31.617188-20.070313-12.695312-39.183594-21.777344-50.546875-26.746094zm0 0\"/>\n\t</svg>\n    ";
};

exports.meat = meat;