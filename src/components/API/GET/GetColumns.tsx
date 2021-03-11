import React from "react";
import moment from "moment";

export const GetColumns = (viewColumns: [], fields: []) => {
  return viewColumns.map((column: string) => {
    const viewField: { InternalName: string; Title: string } = fields.filter(
      (field: { InternalName: string }) => field.InternalName === column
    )[0];

    let newColumn = {
      key: viewField.InternalName,
      name: viewField.Title,
      fieldName: viewField.InternalName,
      minWidth: 100,
      maxWidth: 100,
    };

    return newColumn;
  });
};

// switch (viewField.FieldTypeKind) {
//   case 2: //Text
//     newColumn.disableFilters = false;
//     break;
//   case 3: //Multiple lines of text
//     newColumn.disableFilters = false;
//     break;
//   case 4: //DateTime
//     newColumn.Cell = ({ value }) =>
//       moment(value).format("MMMM Do, YYYY h:mm a");
//     newColumn.disableSortBy = false;
//     break;
//   case 12: //LinkTitle
//     if (viewField.EntityPropertyName !== "DocIcon") {
//       newColumn.Header = viewField.Title;
//       newColumn.Footer = viewField.Title;
//       newColumn.accessor = viewField.InternalName;
//       newColumn.disableFilters = false;
//     }
//     break;
//   case 20: //User
//     newColumn.Header = viewField.Title;
//     newColumn.Footer = viewField.Title;
//     newColumn.accessor = `${viewField.InternalName}Id`;
//     newColumn.Cell = ({ value }) => <User userId={value} />;
//     newColumn.disableFilters = false;
//     newColumn.Filter = SelectUserColumnFilter;
//     break;

//   default:
//   // console.log(
//   // 	`fields[${column}].FieldTypeKind=${fields[column].FieldTypeKind}`,
//   // 	fields[column]
//   // )
// }
// return newColumn;
//   });
// };