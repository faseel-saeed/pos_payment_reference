# -*- coding: utf-8 -*-
# Author: Faseel Saeed
# Benlever Pvt Ltd

import logging
from collections import namedtuple

from odoo import _, _lt, api, fields, models
import sys

_logger = logging.getLogger(__name__)
import pprint
import inspect

from collections.abc import Mapping
from decorator import decorate


class AccountMoveLine(models.Model):
    _inherit = "account.move.line"

    payment_ref = fields.Char(related="payment_id.payment_ref", store=True)