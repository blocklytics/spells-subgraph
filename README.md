# Spells Subgraph

Deployed at https://thegraph.com/explorer/subgraph/blocklytics/spells

### Built with The Graph

For more information see the docs on https://thegraph.com/docs/.

### Front-end

Deployed at https://spells.fyi/

Code at https://github.com/blocklytics/spells-fyi

# Supported platforms

|Platform|Timelock method|Docs|
|---|---|---|
|Compound|Timelock|[Go there](https://compound.finance/developers/governance)|
|Curve|Custom||
|DDEX|Timelock||
|Dharma|Timelocker|[Go there](http://docs.dharma.io/) (Search: "Upgrade Procedures")|
|Maker|DSChief/DSPause|[Go there](https://docs.makerdao.com/smart-contract-modules/governance-module)|

# Contributing

Contributions welcome! Please check the issues list for inspiration.

### Schema

The schema consists of five entities:
1. `Platform` - the DeFi platform - [Example query](https://thegraph.com/explorer/subgraph/blocklytics/spells?query=Platforms)
1. `Timelock` - the timelock implementation - [Example query](https://thegraph.com/explorer/subgraph/blocklytics/spells?query=Timelocks)
1. `Spell` - the timelocked transaction - [Example query](https://thegraph.com/explorer/subgraph/blocklytics/spells?query=Spells)
1. `Target` - contract the spell will affect - [Example query](https://thegraph.com/explorer/subgraph/blocklytics/spells?query=Targets)
1. `Param` - (not currently used) effect the spell will have

### Adding platforms

Checklist:
*  Add ABIs to `/abis/<Platform>`
*  Add mappings to `/src/mappings/<Platform>`
*  Add details to `subgraph.yaml`
*  QA against Example Queries for each schema entity above