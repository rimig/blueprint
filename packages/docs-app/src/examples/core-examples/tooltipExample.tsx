/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Button, Intent, Popover, Position, Switch, Tooltip } from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";

export class TooltipExample extends BaseExample<{ isOpen: boolean }> {
    public state = {
        isOpen: false,
    };

    protected renderExample() {
        // using JSX instead of strings for all content so the tooltips will re-render
        // with every update for dark theme inheritance.
        const lotsOfText = (
            <span>
                In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a
                orci.
            </span>
        );
        return (
            <div className="docs-tooltip2-example">
                <div>
                    Inline text can have&nbsp;
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content={
                            <em>
                                This tooltip contains an <strong>em</strong> tag.
                            </em>
                        }
                    >
                        a tooltip.
                    </Tooltip>
                </div>
                <div>
                    <Tooltip content={lotsOfText}>Or, hover anywhere over this whole line.</Tooltip>
                </div>
                <div>
                    This line's tooltip&nbsp;
                    <Tooltip className="pt-tooltip-indicator" content={<span>disabled</span>} disabled={true}>
                        is disabled.
                    </Tooltip>
                </div>
                <div>
                    This line's tooltip&nbsp;
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content={<span>BRRAAAIINS</span>}
                        isOpen={this.state.isOpen}
                    >
                        is controlled by external state.
                    </Tooltip>
                    <Switch
                        checked={this.state.isOpen}
                        label="Open"
                        onChange={this.toggleControlledTooltip}
                        style={{ display: "inline-block", marginBottom: 0, marginLeft: 20 }}
                    />
                </div>
                <div>
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content="Intent.PRIMARY"
                        inline={true}
                        intent={Intent.PRIMARY}
                        position={Position.LEFT}
                    >
                        Available
                    </Tooltip>&nbsp;
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content="Intent.SUCCESS"
                        inline={true}
                        intent={Intent.SUCCESS}
                        position={Position.TOP}
                    >
                        in the full
                    </Tooltip>&nbsp;
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content="Intent.WARNING"
                        inline={true}
                        intent={Intent.WARNING}
                        position={Position.BOTTOM}
                    >
                        range of
                    </Tooltip>&nbsp;
                    <Tooltip
                        className="pt-tooltip-indicator"
                        content="Intent.DANGER"
                        inline={true}
                        intent={Intent.DANGER}
                        position={Position.RIGHT}
                    >
                        visual intents!
                    </Tooltip>
                </div>
                <br />
                <Popover
                    content={<h1>Popover!</h1>}
                    position={Position.RIGHT}
                    popoverClassName="pt-popover-content-sizing"
                >
                    <Tooltip
                        content={<span>This button also has a popover!</span>}
                        position={Position.RIGHT}
                        inline={true}
                    >
                        <Button intent={Intent.SUCCESS} text="Hover and click me" />
                    </Tooltip>
                </Popover>
            </div>
        );
    }

    private toggleControlledTooltip = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
}
