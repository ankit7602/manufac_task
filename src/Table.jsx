import React from "react"
import { calculateMean, calculateMedian, calculateMode } from "./CommonFunction"
import { object, string } from "prop-types"

const Table = ({ property = "Flavanoids", groupedData }) => {
    const classes = ["Class 1", "Class 2", "Class 3"]
    const data = [
        {
            title: `Mean`,
        }, {
            title: `Median`,
        }, {
            title: `Mode`,
        }
    ]
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>
                            Measure
                        </th>
                        {classes.length
                            ? classes.map((item, key) => {
                                return (
                                    <th key={key}>
                                        {item}
                                    </th>
                                );
                            })
                            : ""}
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {data.map((item, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <tr>
                                        <th>
                                            {property} {item.title}
                                        </th>
                                        {classes.length
                                            ? classes.map(
                                                (subItem, subkey) => {
                                                    return (
                                                        <React.Fragment key={subkey}>
                                                            <td>
                                                                {
                                                                    item.title === "Mean" ? calculateMean(groupedData[subkey + 1], property)
                                                                        : item.title === "Median" ? calculateMedian(groupedData[subkey + 1], property) :
                                                                            item.title === "Mode" ? calculateMode(groupedData[subkey + 1], property) : ""
                                                                }
                                                            </td>

                                                        </React.Fragment>
                                                    );
                                                }
                                            )
                                            : ""}
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </React.Fragment>
                </tbody>
            </table>
        </React.Fragment>
    )
}

Table.propTypes = {
    property: string.isRequired,
    groupedData: object.isRequired
};
export default Table