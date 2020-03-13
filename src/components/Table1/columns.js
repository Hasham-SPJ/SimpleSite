import {
    AggregateFunctions,
   // ColumnDataType,
    ColumnModel,
  //  ColumnSortDirection
} from "tubular-common";

const defaultColumnProperties = {
    resizable: true,
    width: 120
};

const columns = [


    new ColumnModel("Name", {
        aggregate: AggregateFunctions.Count,
        filterable: true,
        searchable: true,
        sortable: true,
    }),
    new ColumnModel("Rate"),
    new ColumnModel("Employee"),
    new ColumnModel("Founded"),
    new ColumnModel("Website"),
    new ColumnModel("location"),
    new ColumnModel("CITY", {
        searchable: true,
        sortable: true,
    }),
    new ColumnModel("FocusArea", {
        searchable: true,
        sortable: true,
    })
].map(c => ({ ...c, ...defaultColumnProperties }));
export default columns;
