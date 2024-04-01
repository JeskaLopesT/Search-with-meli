import { CaretRight } from "phosphor-react";
import { Fragment } from "react";

import styles from './breadcrumb.module.scss';
import { IBreadcrumbItem, IBreadcrumbProps } from "../../interfaces/breadcrumb-interface";

export function Breadcrumbs(props:IBreadcrumbProps) {
  return (
    <div className={styles.breadcrumbs}>
      <ul>
        {props.items.map((c:IBreadcrumbItem) => (
          <Fragment key={c.id}>
            <li><a href="#">{c.name}</a></li>
            <li className={styles.divider}>
              <CaretRight size={12} />
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
