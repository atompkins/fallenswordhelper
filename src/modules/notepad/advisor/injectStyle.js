import {createStyle} from '../../common/cElement';
import insertElement from '../../common/insertElement';

/* eslint-disable max-len */
const thisStyle = `
/* Advisor */
.fshSmartTable {
  border: 1px solid black;
  table-layout: fixed;
  width: 650px;
}

.fshSmartTable thead tr {
  height: 22px;
}

.fshSmartTable thead th {
  background-color: #cd9e4b;
  position: relative;
}

.fshSmartTable thead th span {
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.fshSmartTable tbody tr:hover {
  background-color: whitesmoke;
}

.fshSmartTable td:nth-child(1), .fshSmartTable th:nth-child(1) {width: 64px;} /* member */
.fshSmartTable td:nth-child(2), .fshSmartTable th:nth-child(2) {width: 24px;} /* lvl */
.fshSmartTable td:nth-child(3), .fshSmartTable th:nth-child(3) {width: 76px;} /* rank */
.fshSmartTable td:nth-child(4), .fshSmartTable th:nth-child(4) {width: 70px;} /* depo */
.fshSmartTable td:nth-child(5), .fshSmartTable th:nth-child(5) {width: 70px;} /* tax */
.fshSmartTable td:nth-child(6), .fshSmartTable th:nth-child(6) {width: 70px;} /* total */
.fshSmartTable td:nth-child(7), .fshSmartTable th:nth-child(7) {width: 32px;} /* fsp */
.fshSmartTable td:nth-child(8), .fshSmartTable th:nth-child(8) {width: 38px;} /* skill */
.fshSmartTable td:nth-child(9), .fshSmartTable th:nth-child(9) {width: 32px;} /* create */
.fshSmartTable td:nth-child(10), .fshSmartTable th:nth-child(10) {width: 30px;} /* join */
.fshSmartTable td:nth-child(11), .fshSmartTable th:nth-child(11) {width: 26px;} /* relic */
.fshSmartTable td:nth-child(12), .fshSmartTable th:nth-child(12) {width: 90px;} /* gxp */

.fshSmartTable td:nth-child(n+4), .fshSmartTable th:nth-child(n+4) {
  text-align: center;
}

.fshSmartTable td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* Smart Table */
.fshSmartTable th[data-st-sort]:after {
  /* color: #999; */
  /* content: '\\f0dc'; */
  position: absolute;
  right: 8px;
}

/* .fshSmartTable th[data-st-sort]:hover::after {
  color: #333;
} */

.st-sort-asc:after {
  /* content: '\\25b3\\0020'; */
  content: '\\25b3';
}

.st-sort-desc:after {
  /* content: '\\25bd\\0020'; */
  content: '\\25bd';
}
`;
/* eslint-enable max-len */

export default function injectStyle() {
  insertElement(document.body, createStyle(thisStyle));
}
