// import styles from './styles.module.scss'
// export default function Page() {
//     return (
//         <div className={styles.auto_start}>
//             <h1>入门</h1>
//             <p>在我们做任何事情之前，我们必须首先安装 auto 作为开发依赖项。</p>
//         </div>
//     );
// }

'use client'

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { autoMenuItems } from './menuItems'

import styles from './styles.module.scss'

export default function Page() {
    const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  

    return (
        <div className={styles.auto_start}>
            <div>
                 <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['welcome']}
                    defaultSelectedKeys={['introduce']}
                    mode="inline"
                    items={autoMenuItems}
                 />  
            </div>
        </div>
    );
}