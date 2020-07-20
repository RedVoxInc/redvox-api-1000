"""
Reference implementation for finding best latency and offset from synch exchanges.

All times are in microseconds since the epoch UTC. Example exchanges are provided from real data.

Requires Python 3.7+ and the numpy library.
"""

from dataclasses import dataclass
from typing import List
import sys

import numpy as np


@dataclass
class Exchange:
    a1: float
    a2: float
    a3: float
    b1: float
    b2: float
    b3: float


@dataclass
class BestMetric:
    latency: float
    offset: float


def load_example_exchanges() -> List[Exchange]:
    exchanges: List[Exchange] = [
        Exchange(1594771415891794.0, 1594771416050039.0, 1594771416050086.0, 1594771415954551.0, 1594771415954595.0,
                 1594771416112890.0),
        Exchange(1594771417265864.0, 1594771417432104.0, 1594771417432184.0, 1594771417335389.0, 1594771417335438.0,
                 1594771417499145.0),
        Exchange(1594771418637965.0, 1594771418786431.0, 1594771418786477.0, 1594771418700926.0, 1594771418700976.8,
                 1594771418857968.0),
        Exchange(1594771419971945.0, 1594771420123001.0, 1594771420123047.0, 1594771420033568.0, 1594771420033603.0,
                 1594771420184985.2),
        Exchange(1594771421291901.0, 1594771421480365.0, 1594771421480412.0, 1594771421353510.8, 1594771421353559.0,
                 1594771421541453.0),
        Exchange(1594771422709944.0, 1594771422861692.0, 1594771422861761.0, 1594771422772705.0, 1594771422772740.2,
                 1594771422923560.0),
        Exchange(1594771424061731.0, 1594771424241204.0, 1594771424241250.0, 1594771424129514.0, 1594771424129565.0,
                 1594771424302468.0),
        Exchange(1594771425450174.0, 1594771425602057.0, 1594771425602103.0, 1594771425511783.8, 1594771425511834.2,
                 1594771425663473.8),
        Exchange(1594771426786328.0, 1594771426945421.0, 1594771426945468.0, 1594771426849815.2, 1594771426849865.0,
                 1594771427007158.0),
        Exchange(1594771428148562.0, 1594771428316638.0, 1594771428316686.0, 1594771428214321.0, 1594771428214373.8,
                 1594771428379630.0)
    ]

    return exchanges


def find_best_metric(values: np.ndarray) -> BestMetric:
    latency: float = sys.float_info.max
    offset: int = 0

    for i, value in enumerate(values):
        if 0 < value < latency:
            latency = value
            offset = i

    if latency == sys.float_info.max:
        return BestMetric(0, 0)

    return BestMetric(latency, offset)


def find_best_latency_offset(exchanges: List[Exchange]) -> BestMetric:
    a1s: np.ndarray = np.array(list(map(lambda exchange: exchange.a1, exchanges)))
    a2s: np.ndarray = np.array(list(map(lambda exchange: exchange.a2, exchanges)))
    a3s: np.ndarray = np.array(list(map(lambda exchange: exchange.a3, exchanges)))
    b1s: np.ndarray = np.array(list(map(lambda exchange: exchange.b1, exchanges)))
    b2s: np.ndarray = np.array(list(map(lambda exchange: exchange.b2, exchanges)))
    b3s: np.ndarray = np.array(list(map(lambda exchange: exchange.b3, exchanges)))

    d1s: np.ndarray = ((a2s - a1s) - (b2s - b1s)) * 0.5
    d3s: np.ndarray = ((b3s - b2s) - (a3s - a2s)) * 0.5
    o1s: np.ndarray = (a1s - b1s) + d1s
    o3s: np.ndarray = (a3s - b3s) + d3s

    d1_metric: BestMetric = find_best_metric(d1s)
    d3_metric: BestMetric = find_best_metric(d3s)

    if d3_metric.latency < d1_metric.latency:
        return BestMetric(d3_metric.latency, o3s[d3_metric.offset])
    else:
        return BestMetric(d1_metric.latency, o1s[d1_metric.offset])


def main():
    exchanges: List[Exchange] = load_example_exchanges()
    best_latency_offset: BestMetric = find_best_latency_offset(exchanges)
    print(best_latency_offset)


if __name__ == "__main__":
    main()
