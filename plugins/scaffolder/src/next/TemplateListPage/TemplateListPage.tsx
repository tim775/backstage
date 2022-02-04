/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { TemplateEntityV1beta3 } from '@backstage/plugin-scaffolder-common';
import { Entity } from '@backstage/catalog-model';
import { makeStyles } from '@material-ui/core';
import {
  Content,
  ContentHeader,
  CreateButton,
  Header,
  Lifecycle,
  Page,
  SupportButton,
} from '@backstage/core-components';
import {
  EntityKindPicker,
  EntityListProvider,
  EntitySearchBar,
  EntityTagPicker,
  UserListPicker,
} from '@backstage/plugin-catalog-react';
import { CategoryPicker } from './CategoryPicker';

export type TemplateListGroup = {
  title?: string;
  titleComponent?: React.ReactNode;
  filter: (entity: Entity) => boolean;
};

export type TemplateListPageProps = {
  TemplateCardComponent?: React.ComponentType<{
    template: TemplateEntityV1beta3;
  }>;
  groups?: TemplateListGroup[];
};

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    display: 'grid',
    gridTemplateAreas: "'filters' 'grid'",
    gridTemplateColumns: '250px 1fr',
    gridColumnGap: theme.spacing(2),
  },
}));

export const TemplateListPage = (props: TemplateListPageProps) => {
  const styles = useStyles();
  return (
    <EntityListProvider>
      <Page themeId="home">
        <Header
          pageTitleOverride="Create a New Component"
          title={
            <>
              Create a New Component <Lifecycle shorthand />
            </>
          }
          subtitle="Create new software components using standard templates"
        />
        <Content>
          <ContentHeader title="Available Templates">
            {/* {allowed && (
              <CreateButton
                title="Register Existing Component"
                to={registerComponentLink && registerComponentLink()}
              />
            )} */}
            <SupportButton>
              Create new software components using standard templates. Different
              templates create different kinds of components (services,
              websites, documentation, ...).
            </SupportButton>
          </ContentHeader>

          <div className={styles.contentWrapper}>
            <div>
              <EntitySearchBar />
              <EntityKindPicker initialFilter="template" hidden />
              <UserListPicker
                initialFilter="all"
                availableFilters={['all', 'starred']}
              />
              <CategoryPicker />
              <EntityTagPicker />
            </div>
            <div>
              {/* {groups &&
                groups.map((group, index) => (
                  <TemplateList
                    key={index}
                    TemplateCardComponent={TemplateCardComponent}
                    group={group}
                  />
                ))}
              <TemplateList
                key="other"
                TemplateCardComponent={TemplateCardComponent}
                group={otherTemplatesGroup} 
              />*/}
            </div>
          </div>
        </Content>
      </Page>
    </EntityListProvider>
  );
};