# -*- coding: utf-8 -*-
# See LICENSE file for full copyright and licensing details.

{
    'name': 'pos_payment_reference',
    'version': '0.1.1',
    'author': 'Benlever Pvt Ltd',
    'company': 'Benelever Pvt Ltd',
    'website': 'https://www.benlever.com',
    'maintainer': 'Benlever Pvt Ltd',
    'category': 'Sales/Point of Sale',
    'sequence': 6,
    'summary': 'Allows you to record payment references',
    'description': """
Allows you to record payment references
""",
    'depends': ['point_of_sale', 'account'],
    'data': [
        'views/pos_payment_view.xml',
        'views/bank_rec_widget_views.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_payment_reference/static/src/xml/**/*',
            'pos_payment_reference/static/src/js/**/*',
        ],
    },
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
