def merge(nums, left, mid, right):
    index_helper = 0
    index1 = left
    index2 = mid + 1
    tmp = [0] * (right - left + 1)
    inversions_count = 0
    
    while index1 <= mid and index2 <= right:
        if nums[index1] <= nums[index2]:
            tmp[index_helper] = nums[index1]
            index1 += 1
        else:
            inversions_count += (mid-index1 + 1)
            tmp[index_helper] = nums[index2]
            index2 += 1
        
        index_helper += 1
    
    while index1 <= mid:
        tmp[index_helper] = nums[index1]
        index1 += 1
        index_helper += 1

    while index2 <= right:
        tmp[index_helper] = nums[index2]
        index2 += 1
        index_helper += 1

    j = 0
    for i in range(left, right+1):
        nums[i] = tmp[j]
        j += 1
        
    return inversions_count

def calculate_recommendation(country, user_characteristics):
    answer = tourist_attraction[country][0]
    min_inversions_count = float("infinity")
    
    for place in tourist_attraction[country]:
        
        stack = []
        for i in range(1, 4):
            index_current_ranking = place['characteristics'][i]
            stack.append(user_characteristics[index_current_ranking])
            
        inversions_count = mergeSortInversions(stack, 0, len(stack)-1)
        
        if min_inversions_count > inversions_count:
            min_inversions_count = inversions_count
            answer = place
        
    return answer
    
def calculate():
        graph = {}
        graph['Argentina'] = [ ['Paraguai', 1042], ['Bolivia', 2236], ['Chile', 1138], ['Uruguai', 206]]
        graph['Uruguai'] = [['Brasil', 2280], ['Argentina', 206]]
        graph['Chile'] = [['Peru', 2466], ['Bolivia', 1902], ['Argentina', 1138]]
        graph['Bolivia'] = [['Brasil', 2162], ['Paraguai', 1466], ['Peru', 1081], ['Chile', 1902], ['Argentina', 2236]]
        graph['Peru'] = [['Brasil', 3172], ['Colombia', 1892], ['Equador', 1329], ['Bolivia', 1081], ['Chile', 2466], ['Argentina', 3138]]
        graph['Equador'] = [['Colombia', 731], ['Peru', 1329]]
        graph['Colombia'] = [['Brasil', 3675], ['Venezuela', 1018], ['Equador', 731], ['Peru', 1892]]
        graph['Venezuela'] = [['Brasil', 3595], ['Guiana', 1045], ['Colombia', 1018]]
        graph['Guiana'] = [['Brasil', 2756], ['Suriname', 343], ['Venezuela', 1045]]
        graph['Suriname'] = [['Brasil', 2539], ['Guiana Francesa', 337], ['Guiana', 343]]
        graph['Guiana Francesa'] = [['Brasil', 2355], ['Suriname', 337]]
        graph['Paraguai'] = [['Brasil', 1458], ['Bolivia', 1466], ['Argentina', 1042]]
        graph['Brasil'] = [['Uruguai', 2280], ['Paraguai', 1458], ['Bolivia', 2162], ['Peru', 3172], ['Colombia', 3675], ['Venezuela', 3595], ['Guiana', 2756], ['Suriname', 2539], ['Guiana Francesa', 2355]]
        
        src = 'Brasil'
        target = 'Equador'

        dist = collections.defaultdict(lambda: float('infinity'))
        dist[src] = 0
        prev = {}
        user_characteristics = {1: 2, 2: 3, 3: 1}
        
        for _ in range(14):
            _dist = dist.copy()
            
            for s in graph:
                for e, w in graph[s]:
                    if _dist[e] > dist[s] + w:
                        _dist[e] = dist[s] + w
                        prev[e] = s
                    
            dist = _dist

        result = []
        key = target
        
        recommended_place = calculate_recommendation(target, user_characteristics)
        result.append(recommended_place)
        
        while key in prev:
            if prev[key] == src: break
                
            recommended_place = calculate_recommendation(prev[key], user_characteristics)
            result.append(recommended_place)
            key = prev[key]
        
        return result