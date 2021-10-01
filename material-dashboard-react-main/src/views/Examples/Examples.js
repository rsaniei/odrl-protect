import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Notes from "@material-ui/icons/Notes";
import Code from "@material-ui/icons/Code";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import { bugs } from "variables/general.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
let p1 = <pre><code>{`{
  "@context": "http://www.w3.org/ns/odrl.jsonld",
  "@type": "Set",
  "uid": "http://example.com/policy:1010",
  "permission": [{
        "target": "http://example.com/asset:9898.movie",
        "action": "display",
        "constraint": [{
            "leftOperand": "spatial",
            "operator": "eq",
            "rightOperand": "https://www.wikidata.org/wiki/Q183",
              "comment": "i.e Germany"
        }]
      }]
    }`}</code></pre>;

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Policy1",
                tabIcon: Notes,
                tabContent: (
                  <p>The following policy express the permission for everybody to display the movie http://example.com/asset:9898.movie in Germany</p>
                ),
              },
              {
                tabName: "ODRL Code",
                tabIcon: Code,
                tabContent: (
                  <div>{p1}</div>


                  // <pre><code class="xml">@context: http://www.w3.org/ns/odrl.jsonld</code></pre>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Policy2",
                tabIcon: Notes,
                tabContent: (
                  <div>Thisi s policy 2</div>
                  // <Tasks
                  //   checkedIndexes={[0, 3]}
                  //   tasksIndexes={[0, 1, 2, 3]}
                  //   tasks={bugs}
                  // />
                ),
              },
              {
                tabName: "ODRL Code",
                tabIcon: Code,
                tabContent: (
                  <div>Thisi s code 2</div>
                ),
              },
            ]}
          />
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
