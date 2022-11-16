


import {
    Button,
    ProductSpecification,
    Switch,
    List,
    ListItem,
  } from "attryb-ui";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function DropDownSearch({products,activeItem,SetActiveItem}) {


    return (
        <div className="center">
            <List
                /**
                 * Array of data objects we want to show in list. This data object must contain
                 * these three props:
                 * 1. _id
                 * 2. value (This will be display as text in the list)
                 * 3. data (Complete data object - This same data will be passed to <ListItem>)
                 *    as <List data={...}>[children]</list>
                 */
                list={products}
                activeItem={activeItem}
                /**
                 * searchProps is an array of properties in item object we want to search upon.
                 * For example, here we want to search on 'value', therefore an array with 'value'
                 * string as prop.
                 *
                 * If wanted to disable search, simply not define this prop or pass an empty array
                 */
                searchProps={["value"]}
                /**
                 * onSelect callback handler which returns "data" object of selected item
                 * There, <ListItem> must contain a data object from the list of objects we
                 * are using to render our List component
                 */
                selectCallback={SetActiveItem}>
                {products.map((item) => {
                    return (
                        <ListItem key={item._id} data={item}>
                            {item.value}
                        </ListItem>
                    )
                })}
            </List>

        </div>
    )
}