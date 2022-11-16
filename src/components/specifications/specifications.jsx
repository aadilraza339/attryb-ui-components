import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, ProductSpecification } from "attryb-ui";
import uniqid from "uniqid";

export default function ProductSpecifications({ specifications, setSpecifications }) {
    const [active, setActive] = useState("");

    const addSpecification = () => {
        let inputFieldId = uniqid();
        const newState = [
            ...specifications,
            {
                _id: inputFieldId,
                label: "New Specification - " + inputFieldId.substring(inputFieldId.length - 4),
                value: "",
                name: "New Specification",
                canRemove: true,
                canEditLabel: true,
                active: false,
            },
        ];

        console.log({ new: newState });
        setSpecifications(newState);
    };

    const updateSpecification = (spec) => {
        const list = [...specifications];
        list.forEach((item, index) => {
            if (item._id === spec._id) {
                list[index] = spec;
            }
        });

        setSpecifications(list);
    };

    const removeSpecification = (newItem) => {
        const list = [...specifications];
        let row = list.filter((item) => {
            return !(item._id === newItem._id);
        });
        setSpecifications(row);
    };

    return (
        <div className="center" style={{ display: "flex", flexDirection: "column", gap: "24px"}}>
            {specifications.map((item, index) => {
                return (
                    <div className="box__input_list__item">
                        <ProductSpecification
                            key={item._id}
                            data={item}
                            active={item._id === active}
                            labelMaxChars={0}
                            canEditLabel={true}
                            canRemove={true}
                            outsideClickCallback={(data, isOutside, event) => {
                                console.log("outsideClick callback, activeState: ", active);
                                console.log({
                                    outside: { data, isOutside, event },
                                    active: active,
                                });

                                setActive("");
                                // updateSpecification({ ...data });
                            }}
                            onFocus={(event) => {
                                if (active === item._id) return;
                                console.log("onFocus");
                                setActive(item._id);
                            }}
                            onMouseDown={(event) => {
                                if (active === item._id) return;
                                console.log("onMouseDown");
                                console.log({
                                    active: active,
                                });
                                setActive(item._id);
                            }}
                            removeCallback={(callbackItem, flag, event) => {
                                console.log("onRemove");
                                console.log({
                                    RemovedItemArg: callbackItem,
                                    active: active,
                                });
                                setActive("");
                                removeSpecification(callbackItem);
                            }}
                            // onKeyDown={(event) => {
                            //     console.log("onKeyDown");
                            //     const target = event?.target;
                            //     const name = target?.getAttribute("name");
                            //     if (event.key === "Tab" && name === "spec-input") {
                            //         setActive("");
                            //     }
                            // }}
                        />
                    </div>
                );
            })}
            <div className="add__specification">
                <Button variant="outline" onClick={addSpecification}>
                    Add Specification
                </Button>
            </div>
        </div>
    );
}