declare namespace RouterPage {
  /** 根路由 */
  type RootRouteKey = 'root';

  /** 未找到路由(捕获无效路径的路由) */
  type NotFoundRouteKey = 'not-found';

  /** 页面路由 */
  type RouteKey =
    | '403'
    | '404'
    | '500'
    | 'article'
    | 'article_bulletin'
    | 'article_category'
    | 'article_category_category-list'
    | 'article_category_category-modify'
    | 'article_category_chart'
    | 'article_edit'
    | 'article_friend-link'
    | 'article_friend-link_friend-link-list'
    | 'article_friend-link_friend-link-modify'
    | 'article_manage'
    | 'article_manage_article-list'
    | 'article_manage_article-modify'
    | 'article_share'
    | 'article_tag'
    | 'article_tag_chart'
    | 'article_tag_tag-list'
    | 'article_tag_tag-modify'
    | 'auth-demo'
    | 'auth-demo_permission'
    | 'auth-demo_super'
    | 'auth-server'
    | 'auth-server_login'
    | 'auth-server_login_login-info-list'
    | 'auth-server_login_login-info-log'
    | 'auth-server_oauth'
    | 'auth-server_oauth_oauth-client-list'
    | 'auth-server_oauth_oauth-client-modify'
    | 'comment'
    | 'comment_comment-list'
    | 'comment_comment-modify'
    | 'constant-page'
    | 'dashboard'
    | 'dashboard_analysis'
    | 'dashboard_workbench'
    | 'exception'
    | 'exception_403'
    | 'exception_404'
    | 'exception_500'
    | 'file-center'
    | 'file-center_all-file'
    | 'file-center_all-file_all-file-list'
    | 'file-center_all-file_all-file-show'
    | 'file-center_picture'
    | 'function'
    | 'function_tab'
    | 'function_tab-detail'
    | 'function_tab-multi-detail'
    | 'login'
    | 'message-center'
    | 'message-center_email-log'
    | 'message-center_email-manage'
    | 'message-center_email-manage_user-list'
    | 'message-center_email-manage_user-modify'
    | 'message-center_mq-message'
    | 'message-center_send-mail'
    | 'monitor'
    | 'monitor_nacos'
    | 'monitor_rabbitmq'
    | 'monitor_sentinel'
    | 'multi-menu'
    | 'multi-menu_first'
    | 'multi-menu_first_second'
    | 'multi-menu_first_second-new'
    | 'multi-menu_first_second-new_third'
    | 'not-found'
    | 'permission'
    | 'permission_admin-router'
    | 'permission_admin-router_admin-router-list'
    | 'permission_admin-router_admin-router-modify'
    | 'permission_interface'
    | 'permission_interface_interface-list'
    | 'permission_interface_interface-modify'
    | 'permission_permission-manage'
    | 'permission_role'
    | 'permission_role_role-list'
    | 'permission_role_role-modify'
    | 'permission_white-url'
    | 'permission_white-url_white-url-list'
    | 'permission_white-url_white-url-modify'
    | 'plugin'
    | 'plugin_charts'
    | 'plugin_charts_antv'
    | 'plugin_charts_echarts'
    | 'plugin_copy'
    | 'plugin_editor'
    | 'plugin_editor_markdown'
    | 'plugin_editor_quill'
    | 'plugin_icon'
    | 'plugin_map'
    | 'plugin_print'
    | 'plugin_swiper'
    | 'plugin_video'
    | 'siteSetting'
    | 'siteSetting_site-setting-list'
    | 'siteSetting_site-setting-modify'
    | 'system'
    | 'system_sys-setting-list'
    | 'system_sys-setting-modify'
    | 'test'
    | 'test_test1'
    | 'test_test2'
    | 'test_test3'
    | 'user'
    | 'user_manage'
    | 'user_manage_user-list'
    | 'user_manage_user-modify'
    | 'user_profile'
    | 'user_profile_user-info'
    | 'user_profile_user-security';

  /** 最后一级路由(该级路有对应的vue文件) */
  type LastDegreeRouteKey = Extract<RouteKey, '403' | '404' | '500' | 'article_bulletin' | 'article_category' | 'article_category_category-list' | 'article_category_category-modify' | 'article_category_chart' | 'article_edit' | 'article_friend-link' | 'article_friend-link_friend-link-list' | 'article_friend-link_friend-link-modify' | 'article_manage' | 'article_manage_article-list' | 'article_manage_article-modify' | 'article_share' | 'article_tag' | 'article_tag_chart' | 'article_tag_tag-list' | 'article_tag_tag-modify' | 'auth-demo_permission' | 'auth-demo_super' | 'auth-server_login' | 'auth-server_login_login-info-list' | 'auth-server_login_login-info-log' | 'auth-server_oauth' | 'auth-server_oauth_oauth-client-list' | 'auth-server_oauth_oauth-client-modify' | 'comment' | 'comment_comment-list' | 'comment_comment-modify' | 'constant-page' | 'dashboard_analysis' | 'dashboard_workbench' | 'exception_403' | 'exception_404' | 'exception_500' | 'file-center_all-file' | 'file-center_all-file_all-file-list' | 'file-center_all-file_all-file-show' | 'file-center_picture' | 'function_tab' | 'function_tab-detail' | 'function_tab-multi-detail' | 'login' | 'message-center_email-log' | 'message-center_email-manage' | 'message-center_email-manage_user-list' | 'message-center_email-manage_user-modify' | 'message-center_mq-message' | 'message-center_send-mail' | 'monitor_nacos' | 'monitor_rabbitmq' | 'monitor_sentinel' | 'multi-menu_first_second' | 'multi-menu_first_second-new_third' | 'not-found' | 'permission_admin-router' | 'permission_admin-router_admin-router-list' | 'permission_admin-router_admin-router-modify' | 'permission_interface' | 'permission_interface_interface-list' | 'permission_interface_interface-modify' | 'permission_permission-manage' | 'permission_role' | 'permission_role_role-list' | 'permission_role_role-modify' | 'permission_white-url' | 'permission_white-url_white-url-list' | 'permission_white-url_white-url-modify' | 'plugin_charts_antv' | 'plugin_charts_echarts' | 'plugin_copy' | 'plugin_editor_markdown' | 'plugin_editor_quill' | 'plugin_icon' | 'plugin_map' | 'plugin_print' | 'plugin_swiper' | 'plugin_video' | 'siteSetting' | 'siteSetting_site-setting-list' | 'siteSetting_site-setting-modify' | 'system' | 'system_sys-setting-list' | 'system_sys-setting-modify' | 'test_test1' | 'test_test2' | 'test_test3' | 'user_manage' | 'user_manage_user-list' | 'user_manage_user-modify' | 'user_profile' | 'user_profile_user-info' | 'user_profile_user-security'>
}
