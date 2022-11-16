import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, ProductSpecification, Switch, List, ListItem } from "attryb-ui";
import uniqid from "uniqid";

export default function ProductSpecifications({ specifications, setSpecifications }) {
    const [actives, setActives] = useState([]);

    const createNewSpecification = () => {
        let inputFieldId = uniqid();
        console.log({ specifications });
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

        setSpecifications(newState);
    };

    const removeInputFields = (newItem) => {
        const list = [...specifications];
        let row = list.filter((item) => {
            return !(item._id === newItem._id);
        });
        setSpecifications(row);
    };

    const updateCardsUIState = useCallback(
        (dataId = "", state = false) => {
            const temp = {};

            specifications.forEach((data) => {
                temp[data._id] = false;
            });

            if (dataId) temp[dataId] = state;

            console.log({ temp });
            setActives(temp);
        },
        [specifications]
    );

    const stateToggleSpecifiton = (newItem, value) => {
        const list = [...specifications];
        list.forEach((item, index) => {
            console.log(item?._id, newItem?._id);
            if (item?._id === newItem?._id) {
                list[index] = { ...newItem };
            }
        });
        setSpecifications(list);
    };

    useEffect(() => {
        console.log({ specifications });
        console.log({ actives });
        //Updates only on adding and removing specification, therefore the check
        if (Object.keys(actives ?? {}).length === specifications.length) return;
        updateCardsUIState();
    }, [specifications, updateCardsUIState, actives]);

    useEffect(() => {
        console.log({ actives });
    }, [actives]);

    return (
        <div className="center" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {specifications.map((item, index) => {
                const { active } = { ...item };

                return (
                    <div className="box__input_list__item" key={item._id}>
                        <ProductSpecification
                            key={uniqid()}
                            data={item}
                            active={actives[item._id]}
                            labelMaxChars={0}
                            canEditLabel={true}
                            canRemove={true}
                            outsideClickCallback={(data, isOutside, event) => {
                                console.log("outsideClick callback");
                                console.log({
                                    outside: { data, isOutside, event },
                                    active: actives,
                                });

                                stateToggleSpecifiton(data);
                                updateCardsUIState();
                            }}
                            onFocus={() => {
                                if (actives[item._id]) return;
                                console.log("onFocus");
                                updateCardsUIState(item._id, true);
                            }}
                            onMouseDown={(event) => {
                                if (actives[item._id]) return;
                                console.log("onMouseDown");
                                console.log({
                                    active: actives,
                                });
                                updateCardsUIState(item._id, true);
                            }}
                            removeCallback={(callbackItem, flag, event) => {
                                console.log("onRemove");
                                console.log({
                                    RemovedItemArg: callbackItem,
                                    active: actives,
                                });
                                const target = event?.target;

                                const name = target?.getAttribute("name");
                                console.log("coming");
                                updateCardsUIState();
                                removeInputFields(callbackItem);
                                // if (
                                //     event?.key === "Tab"
                                // ) {
                                // }
                            }}
                            onKeyDown={(event) => {
                                console.log("onKeyDown");
                                if (actives[item._id]) return;
                                const target = event?.target;
                                const name = target?.getAttribute("name");
                                if (event.key === "Tab" && name === "spec-input") {
                                    updateCardsUIState();
                                }
                            }}
                        />
                    </div>
                );
            })}
            <div className="add__specification">
                <Button variant="outline" onClick={createNewSpecification}>
                    Add Specification
                </Button>
            </div>
        </div>
    );
}
